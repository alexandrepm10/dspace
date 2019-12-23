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

  items: Items[];
  data: string;
  loading = true;


  ngOnInit() {
    console.log(history.state.data.data);
    this.data = history.state.data;
    console.log(new ItemsDetail('local.theme', this.data));
    this.itemsService.searchItems(new ItemsDetail('local.theme', this.data)).subscribe((items: Items[]) => {
      this.items = items;
      this.loading = false;
    });
  }
}