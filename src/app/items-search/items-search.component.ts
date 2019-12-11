import {Component, OnInit} from '@angular/core';
import {Items} from '../core/items.model';
import {ItemsService} from '../core/items.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Search} from '../core/search.model';
import {ItemsFromSearch} from '../core/items-from-search.model';
import {ResultFromSearch} from '../core/result-from-search.model';
import {element} from 'protractor';

@Component({
  selector: 'app-items-search',
  templateUrl: './items-search.component.html',
  styleUrls: ['./items-search.component.css']
})
export class ItemsSearchComponent implements OnInit {

  constructor(private itemsService: ItemsService, public actRoute: ActivatedRoute, public router: Router) {
    this.itemsFromSearches = [];
  }

  searchData: Search[];
  resultFromSearch: ResultFromSearch[];
  itemsFromSearches: ItemsFromSearch[];
  itemsResult: Items[];
  data: string;
  loading = true;


  ngOnInit() {
    // console.log(history.state.data.data);
    const map = new Map()
      .set('queryField', 'dc.title')
      .set('queryVop', 'contains')
      .set('queryVal', history.state.data.data)
      .set('limit', 100)
      .set('offset', 0)
      .set('expand', 'parentCollection%2Cmetadata%2Cbitstreams')
      .set('filters', 'none');
    this.itemsService.searchWildItems(
      map).subscribe((items: ResultFromSearch[]) => {
      this.resultFromSearch = items;
      console.log(this.resultFromSearch[0].items.itemCount.valueOf());
      this.loading = false;
      console.log('Numero de items: ' + this.resultFromSearch[0].items);
      for (let i = 0, leni = this.resultFromSearch.length; i < leni; i++) {
        console.log('Numero de items: ' + this.resultFromSearch[i].items.itemCount);
        for (let j = 0, lenj = this.resultFromSearch[i].items.itemCount; j < lenj; j++) {
          this.itemsResult.push(this.itemsFromSearches[i].items[j]);
        }
      }
      console.log('ok' + this.itemsResult);
    });
  }
}
