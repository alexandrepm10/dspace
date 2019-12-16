import {Component, OnInit} from '@angular/core';
import {ItemsDetail} from '../core/metadata.model';
import {ApiService} from '../core/api.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private itemsService: ApiService, public actRoute: ActivatedRoute, public router: Router) {
    this.items = [];
  }

  items: ItemsDetail[];

  ngOnInit() {
  }

  onClickSubmit(category) {
    console.log(category);
    this.router.navigate(['items-search'], {state: {data: category}});
  }
}
