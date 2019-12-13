import {Component, OnInit} from '@angular/core';
import {Items} from '../core/items.model';
import {ItemsService} from '../core/items.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Collections} from '../core/collections.model';
import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ItemsListComponent implements OnInit {


  constructor(private itemsService: ItemsService, public actRoute: ActivatedRoute, public router: Router) {
    this.items = [];
  }

  items: Items[];
  loading = true;

  ngOnInit() {
    if (this.actRoute.snapshot.params['uuid']) {
      // this.maxOffSet = this.actRoute.snapshot.params['countItems'] / 10;
      this.itemsService.listSingleItem(this.actRoute.snapshot.params['uuid']).subscribe((items: Items[]) => {
        this.items = items;
        this.loading = false;
      });
    } else {
      this.itemsService.listItems().subscribe((items: Items[]) => {
        this.items = items;
        this.loading = false;
      });
    }
  }
}
