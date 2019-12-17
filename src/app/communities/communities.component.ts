import {Component, OnInit} from '@angular/core';
import {ApiService} from '../core/api.service';
import {Communities} from '../core/communities.model';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-communities',
  templateUrl: './communities.component.html',
  styleUrls: ['./communities.component.css'],
})

export class CommunitiesComponent implements OnInit {

  constructor(private itemsService: ApiService) {
    this.communities = [];
  }
  communities: Communities[];
  loading = true;

  ngOnInit() {
    this.itemsService.listCommunities().subscribe((communities: Communities[]) => {
      this.communities = communities;
      this.loading = false;
    });
  }
}
