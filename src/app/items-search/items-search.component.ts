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
    this.query = new Array();
    let anyTerm = null;
    let author = null;
    let title = null;
    let theme = null;
    let geoArea = null;
    if (this.actRoute.snapshot.params.queryVal != null) {
      const queryVal = this.actRoute.snapshot.params.queryVal;
      this.query.push({'queryVal': queryVal, 'queryVop': 'contains', 'queryField': '*'});
    } else if (this.actRoute.queryParams != null) {
      this.actRoute.queryParams.subscribe(params => {
        anyTerm = params.anyTerm;
        author = params.author;
        title = params.title;
        theme = params.theme;
        geoArea = params.geoArea;
        console.log(anyTerm, author, title);
      });
      console.log(typeof anyTerm, anyTerm, typeof author, author, typeof title, title);
      if (anyTerm != undefined && anyTerm != '') {
        this.query.push({'queryVal': anyTerm, 'queryVop': 'contains', 'queryField': '*'});
      }
      if (title != undefined && title != '') {
        this.query.push({'queryVal': title, 'queryVop': 'contains', 'queryField': 'dc.title'});
      }
      if (author != undefined && author != '') {
        this.query.push({'queryVal': author, 'queryVop': 'contains', 'queryField': 'dc.contributor.author'});
      }
      if (theme != undefined && theme != '') {
        this.query.push({'queryVal': theme, 'queryVop': 'contains', 'queryField': '*'});
      }
      if (geoArea != undefined && geoArea != '') {
        this.query.push({'queryVal': geoArea, 'queryVop': 'contains', 'queryField': '*'});
      }
    } else {
      this.router.navigate(['']);
    }
    // this.query.push({'limit': 500, 'offset': 0, 'expand': 'parentCollection%2Cmetadata%2Cbitstreams', 'filters': 'none'});
    // this.data = 'Pesquisa: ' + ;
    console.log(this.query);
    this.itemsService.searchWildItems(this.query).subscribe((resultFromSearches: ResultFromSearch) => {
      this.resultFromSearch = resultFromSearches;
      this.loading = false;
    });
  }
}
