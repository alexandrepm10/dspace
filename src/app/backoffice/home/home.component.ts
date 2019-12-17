import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class BackofficeHomeComponent implements OnInit {

  News: any = [];

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.loadNews()
  }

  // Get employees list
  loadNews() {
    return this.api.getNews().subscribe((data: {}) => {
      this.News = data;
    })
  }

  myFunc() {
    this.api.setLoggedIn(false);
    this.api.logout().subscribe();
    console.log("logout");
  }

}
