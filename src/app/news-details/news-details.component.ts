import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from '../core/news';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  News: any = [];

  constructor(private api: ApiService,
    public actRoute: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
    this.actRoute.queryParams.subscribe(queryParams => {
      // do something with the query params
    });
    this.actRoute.params.subscribe(routeParams => {
      this.loadNewsDetails(routeParams.id);
    });
  }

  // Get news details
  loadNewsDetails(id) {
    return this.api.getSingleNews(id).subscribe((data: News) => {
      if (data.Id == 0) {
        this.router.navigate(['/noticias']);
      }
      this.News = data;
    });
  }

}
