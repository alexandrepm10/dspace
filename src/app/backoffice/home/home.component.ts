import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class BackofficeHomeComponent implements OnInit {

  News: any = [];

  constructor(private api: ApiService,
    public router: Router) {
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

  logout() {
    this.api.setLoggedInStatus(false);
    this.api.logout().subscribe();
    this.router.navigate(['admin/login']);
    console.log("logout");
  }

}
