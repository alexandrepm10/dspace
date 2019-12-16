import {Component, OnInit} from '@angular/core';
import {ApiService} from '../core/api.service';
import {Communities} from '../core/communities.model';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-communities',
  templateUrl: './communities.component.html',
  styleUrls: ['./communities.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class CommunitiesComponent implements OnInit {

  constructor(private itemsService: ApiService) {
    this.communities = [];
  }

  columnsToDisplay = ['name', 'countItems'];
  expandedElement: Communities | null;
  communities: Communities[];
  loading = true;

  ngOnInit() {
    this.itemsService.listCommunities().subscribe((communities: Communities[]) => {
      this.communities = communities;
      this.loading = false;
    });
  }
}
