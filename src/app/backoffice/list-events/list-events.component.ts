import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.css']
})
export class ListEventsComponent implements OnInit {

  Events: any = [];

  constructor(private api: ApiService,
    public router: Router) { }

  ngOnInit() {
    this.loadEvents();
  }

  loadEvents() {
    return this.api.getEvents().subscribe((data: {}) => {
      this.Events = data;
    })
  }

  deleteEvent(id) {
    if (window.confirm('Tem a certeza que pretende ELIMINAR?')) {
      this.api.deleteEvent(id).subscribe(data => {
        //this.router.navigate(['/admin']);
        this.loadEvents();
      });
    }
  }

  changeHighlight(id, status) {
    if (status == 0) {
      if (window.confirm('Tem a certeza que pretende DESTACAR este evento na página principal?')) {
        this.api.changeHighlightEvent(id, 1).subscribe(data => {
          this.loadEvents();
        });
      }
    }
    else {
      if (window.confirm('Tem a certeza que pretende REMOVER este evento dos destaques da página principal?')) {
        this.api.changeHighlightEvent(id, 0).subscribe(data => {
          this.loadEvents();
        });
      }
    }
  }

  logout() {
    this.api.setLoggedInStatus(false);
    this.api.logout().subscribe();
    this.router.navigate(['/admin/login']);
    console.log("logout");
  }

}
