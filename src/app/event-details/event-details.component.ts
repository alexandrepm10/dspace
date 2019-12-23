import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../core/event';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  event_details: any = [];

  constructor(private api: ApiService,
    public actRoute: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
    this.actRoute.queryParams.subscribe(queryParams => {
      // do something with the query params
    });
    this.actRoute.params.subscribe(routeParams => {
      this.loadEventDetails(routeParams.id);
    });
  }

  loadEventDetails(id) {
    return this.api.getSingleEvent(id).subscribe((data: Event) => {
      if (data.Id == 0) {
        this.router.navigate(['/eventos']);
      }
      this.event_details = data;
    });
  }

}
