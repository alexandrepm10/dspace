import {Component, OnInit} from '@angular/core';
import {Items} from '../core/items.model';
import {ItemsService} from '../core/items.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ResultFromSearch} from '../core/result-from-search.model';
import {Item} from '../shared/item.model';

@Component({
  selector: 'app-items-search',
  templateUrl: './items-search.component.html',
  styleUrls: ['./items-search.component.css']
})
export class ItemsSearchComponent implements OnInit {

  constructor(private itemsService: ItemsService, public actRoute: ActivatedRoute, public router: Router) {
    this.items = [];
  }

  resultFromSearch: ResultFromSearch;
  items: Items[];
  data: string;
  loading = true;


  ngOnInit() {
    // console.log(history.state.data.data);
    const map = new Map()
      .set('queryField', '*')
      .set('queryVop', 'contains')
      .set('queryVal', history.state.data.data)
      .set('limit', 100)
      .set('offset', 0)
      .set('expand', 'parentCollection%2Cmetadata%2Cbitstreams')
      .set('filters', 'none');
    this.data = 'Titlo: ' + history.state.data.data;
    this.itemsService.searchWildItems(map).subscribe((resultFromSearches: ResultFromSearch) => {
      this.resultFromSearch = resultFromSearches;
      console.log(this.resultFromSearch.items);
      let item: Items;
      for (item of resultFromSearches.items) {
        this.items.push(item);
      }
      console.log(this.items);
      this.loading = false;
    });
  }
}
