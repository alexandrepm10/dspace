import {Component, OnInit} from '@angular/core';
import {Items} from '../core/items.model';
import {ApiService} from '../core/api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ResultFromSearch} from '../core/search';

@Component({
  selector: 'app-items-search',
  templateUrl: './items-search.component.html',
  styleUrls: ['./items-search.component.css']
})
export class ItemsSearchComponent implements OnInit {

  constructor(private itemsService: ApiService, public actRoute: ActivatedRoute, public router: Router) {
    this.items = [];
  }

  resultFromSearch: ResultFromSearch;
  items: Items[];
  data: string;
  loading = true;


  ngOnInit() {
    const queryVal = this.actRoute.snapshot.params['queryVal'];
    const map = new Map()
      // .set('queryField', '*')
      .set('queryVop', 'contains')
      .set('queryVal', queryVal)
      .set('limit', 100)
      .set('offset', 0)
      .set('expand', 'parentCollection%2Cmetadata%2Cbitstreams')
      .set('filters', 'none');
    if (this.actRoute.snapshot.params['queryField'] != null) {
      map.set('queryField', this.actRoute.snapshot.params['queryField']);
    } else {
      map.set('queryField', '*');
    }
    this.data = 'Pesquisa: ' + queryVal;
    this.itemsService.searchWildItems(map).subscribe((resultFromSearches: ResultFromSearch) => {
      this.resultFromSearch = resultFromSearches;
      this.loading = false;
    });
  }
}
