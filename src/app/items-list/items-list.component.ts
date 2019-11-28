import {Component, OnInit} from '@angular/core';
import {Items} from '../core/items.model';
import {ItemsService} from '../core/items.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Collections} from '../core/collections.model';


@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {


  constructor(private itemsService: ItemsService, public actRoute: ActivatedRoute, public router: Router) {
    this.items = [];
  }

  items: Items[];

  ngOnInit() {
    if (this.actRoute.snapshot.params['uuid']) {
      // this.maxOffSet = this.actRoute.snapshot.params['countItems'] / 10;
      this.itemsService.listSingleItem(this.actRoute.snapshot.params['uuid']).subscribe((items: Items[]) => {
        this.items = items;
      });
    }
    this.itemsService.listItems().subscribe((items: Items[]) => {
      this.items = items;
    });
  }
}
