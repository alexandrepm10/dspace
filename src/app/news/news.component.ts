import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  News: any = [];

  constructor(private api: ApiService,
    public router: Router) { }

  ngOnInit() {
    this.loadNews();
  }

  // Get employees list
  loadNews() {
    return this.api.getNews().subscribe((data: {}) => {
      this.News = data;
    })
  }

}
