import { Component, OnInit } from '@angular/core';
import {ItemsService} from '../../core/items.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class BackofficeHomeComponent implements OnInit {

  News: any = [];

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.loadNews()
  }

    // Get employees list
    loadNews() {
      return this.itemsService.getNews().subscribe((data: {}) => {
        this.News = data;
      })
    }

}
