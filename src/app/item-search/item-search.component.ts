import {Component, OnInit} from '@angular/core';
import {ItemsService} from '../core/items.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Items} from '../core/items.model';
import {ItemsDetail} from '../core/item-detail.model';
import {Search} from '../core/search.model';


@Component({
  selector: 'app-item-search',
  templateUrl: './item-search.component.html',
  styleUrls: ['./item-search.component.css']
})
export class ItemSearchComponent implements OnInit {

  constructor(private itemsService: ItemsService, public actRoute: ActivatedRoute, public router: Router) {
    this.items = [];
  }

  searchData: Search[];
  items: Items[];
  data: string;
  loading = true;


  ngOnInit() {
    console.log(history.state.data.data);
    this.data = history.state.data;
    // this.data.push(new ItemsDetail('dc.description', history.state.data));
    // this.data.push(new ItemsDetail('dc.title', history.state.data));
    // this.data.push(new ItemsDetail('dc.creator', history.state.data));
    // this.data.push(new ItemsDetail('dc.type', history.state.data));
    // console.log(this.data);
    // User data which we have received from the registration form.
    console.log(new ItemsDetail('local.theme', this.data));
    this.itemsService.searchItems(new ItemsDetail('local.theme', this.data)).subscribe((items: Items[]) => {
      this.items = items;
      this.loading = false;
    });
    // console.log(new Search('dc.title', 'contains', this.data, 100, 0, 'parentCollection%2Cmetadata%2Cbitstreams', 'none'));
    /*const map = new Map()
      .set('queryField', 'dc.title')
      .set('queryVop', 'contains')
      .set('queryVal', history.state.data.data)
      .set('limit', 100)
      .set('offset', 0)
      .set('expand', 'parentCollection%2Cmetadata%2Cbitstreams')
      .set('filters', 'none');
    this.itemsService.searchWildItems(
      map).subscribe((items: Items[]) => {
      this.items = items;
      this.loading = false;
    });*/
  }
}
