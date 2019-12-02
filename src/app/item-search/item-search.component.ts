import {Component, OnInit} from '@angular/core';
import {ItemsService} from '../core/items.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Items} from '../core/items.model';
import {ItemsDetail} from '../core/item-detail.model';


@Component({
  selector: 'app-item-search',
  templateUrl: './item-search.component.html',
  styleUrls: ['./item-search.component.css']
})
export class ItemSearchComponent implements OnInit {

  constructor(private itemsService: ItemsService, public actRoute: ActivatedRoute, public router: Router) {
    this.items = [];
    this.data = [];
  }

  items: Items[];
  data: ItemsDetail[];


  ngOnInit() {
    // this.items = history.state.data;
    // this.data.push(new ItemsDetail('dc.description', history.state.data));
    // this.data.push(new ItemsDetail('dc.title', history.state.data));
    // this.data.push(new ItemsDetail('dc.creator', history.state.data));
    // this.data.push(new ItemsDetail('dc.type', history.state.data));
    console.log(this.data);
    // User data which we have received from the registration form.
    console.log(new ItemsDetail('local.theme', history.state.data));
    this.itemsService.searchItems(new ItemsDetail('local.theme', history.state.data)).subscribe((items: Items[]) => {
      this.items = items;
    });
  }

}
