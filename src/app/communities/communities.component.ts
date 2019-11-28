import {Component, OnInit} from '@angular/core';
import {ItemsService} from '../core/items.service';
import {Communities} from '../core/communities.model';

@Component({
  selector: 'app-communities',
  templateUrl: './communities.component.html',
  styleUrls: ['./communities.component.css']
})

export class CommunitiesComponent implements OnInit {

  constructor(private itemsService: ItemsService) {
    this.communities = [];
  }

  communities: Communities[];
  headElements = ['UUID', 'Name', 'Handle', 'Type', 'CountItems'];

  ngOnInit() {
    this.itemsService.listCommunities().subscribe((communities: Communities[]) => {
      this.communities = communities;
    });
  }
}
