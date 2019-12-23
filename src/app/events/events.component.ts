import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  Events: any = [];

  constructor(
    private api: ApiService,
    public router: Router) { }

  ngOnInit() {
    this.loadEvents();
  }

  loadEvents() {
    return this.api.getEvents().subscribe((data: {}) => {
      this.Events = data;
    })
  }

}
