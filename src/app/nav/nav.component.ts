import {Component, OnInit} from '@angular/core';
import {ItemsDetail} from '../core/item-detail.model';
import {ItemsService} from '../core/items.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private itemsService: ItemsService, public actRoute: ActivatedRoute, public router: Router) {
    this.items = [];
  }

  items: ItemsDetail[];

  ngOnInit() {
  }

  onClickSubmit(form) {
    console.log(form.data);
    this.router.navigate(['searchitem'], {state: {data: form.data}});
  }
}
