import {Component, OnInit} from '@angular/core';
import {Items} from '../core/items.model';
import {ApiService} from '../core/api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ResultFromSearch} from '../core/search';
import {FilteredCollections} from '../core/filtered-collections.model';

@Component({
  selector: 'app-items-search',
  templateUrl: './items-search.component.html',
  styleUrls: ['./items-search.component.css']
})
export class ItemsSearchComponent implements OnInit {

  constructor(private itemsService: ApiService, public actRoute: ActivatedRoute, public router: Router) {
    this.items = [];
    this.query = new Map();
  }

  resultFromSearch: ResultFromSearch;
  items: Items[];
  data: string;
  loading = true;
  page: number;
  offset: number;
  query;


  ngOnInit() {
    this.query = new Map();
    let anyTerm = null;
    let author = null;
    let title = null;
    if (this.actRoute.snapshot.params.queryVal != null) {
      const queryVal = this.actRoute.snapshot.params.queryVal;
      this.query.set('queryVal', queryVal)
        .set('queryVop', 'contains')
        .set('queryField', '*');
    } else if (this.actRoute.queryParams != null) {
      this.actRoute.queryParams.subscribe(params => {
        anyTerm = params.any;
        author = params.author;
        title = params.title;
        console.log(anyTerm, author, title);
      });
      if (anyTerm != null) {
        this.query.set('queryVal', anyTerm)
          .set('queryVop', 'contains')
          .set('queryField', '*');
      }
      if (title != null) {
        this.query.set('queryVal', title)
          .set('queryVop', 'contains')
          .set('queryField', 'dc.title');
      }
      if (author != null) {
        this.query.set('queryVal', author)
          .set('queryVop', 'contains')
          .set('queryField', 'dc.contributor.author');
      }
    } else {
      this.router.navigate(['']);
    }
    this.query.set('limit', 500)
      .set('offset', 0)
      .set('expand', 'parentCollection%2Cmetadata%2Cbitstreams')
      .set('filters', 'none');
    // this.data = 'Pesquisa: ' + ;
    this.itemsService.searchWildItems(this.query).subscribe((resultFromSearches: ResultFromSearch) => {
      this.resultFromSearch = resultFromSearches;
      this.loading = false;
    });
  }
}
