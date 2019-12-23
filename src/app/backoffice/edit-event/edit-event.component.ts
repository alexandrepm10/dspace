import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Event } from '../../core/event';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];

  eventData: Event;

  eventDetailsForm = this.formBuilder.group({
    eventTitle: [''],
    eventShortDescription: [''],
    eventContent: [''],
    eventDateStart: [''],
    eventTimeStart: [''],
    eventDateEnd: [''],
    eventTimeEnd: [''],
  });

  constructor(private api: ApiService,
    public actRoute: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.actRoute.queryParams.subscribe(queryParams => {
      // do something with the query params
    });
    this.actRoute.params.subscribe(routeParams => {
      this.loadEventDetails(routeParams.id);
    });
  }

  // Get event details
  loadEventDetails(id) {
    return this.api.getSingleEvent(id).subscribe((data: Event) => {
      this.eventData = data;
      this.eventDetailsForm.get('eventTitle').setValue(this.eventData.Title);
      this.eventDetailsForm.get('eventShortDescription').setValue(this.eventData.Short_description);
      this.eventDetailsForm.get('eventContent').setValue(this.eventData.Content);
      this.eventDetailsForm.get('eventDateStart').setValue(this.eventData.Date_start);
      this.eventDetailsForm.get('eventTimeStart').setValue(this.eventData.Time_start);
      this.eventDetailsForm.get('eventDateEnd').setValue(this.eventData.Date_end);
      this.eventDetailsForm.get('eventTimeEnd').setValue(this.eventData.Time_end);
    });
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('Title', this.eventDetailsForm.get('eventTitle').value);
    formData.append('Short_description', this.eventDetailsForm.get('eventShortDescription').value);
    formData.append('Content', this.eventDetailsForm.get('eventContent').value);
    formData.append('DateStart', this.eventDetailsForm.get('eventDateStart').value);
    formData.append('TimeStart', this.eventDetailsForm.get('eventTimeStart').value);
    formData.append('DateEnd', this.eventDetailsForm.get('eventDateEnd').value);
    formData.append('TimeEnd', this.eventDetailsForm.get('eventTimeEnd').value);

    if (window.confirm('Tem a certeza que pretende EDITAR?')) {
      this.api.updateEvent(this.id, formData).subscribe(
        data => {
          this.router.navigate(['/admin/events']);
        }
      );
    }
  }

  logout() {
    this.api.setLoggedInStatus(false);
    this.api.logout().subscribe();
    this.router.navigate(['/admin/login']);
    console.log("logout");
  }

}
