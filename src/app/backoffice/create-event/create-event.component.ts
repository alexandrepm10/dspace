import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  eventCreateForm = this.formBuilder.group({
    eventTitle: [''],
    eventShortDescription: [''],
    eventContent: [''],
    eventImage: [''],
    eventDateStart: [''],
    eventTimeStart: [''],
    eventDateEnd: [''],
    eventTimeEnd: ['']
  });

  constructor(public api: ApiService, private formBuilder: FormBuilder, public router: Router) { }

  ngOnInit() {
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.eventCreateForm.get('eventImage').setValue(file);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('Title', this.eventCreateForm.get('eventTitle').value);
    formData.append('Short_description', this.eventCreateForm.get('eventShortDescription').value);
    formData.append('Content', this.eventCreateForm.get('eventContent').value);
    formData.append('file', this.eventCreateForm.get('eventImage').value);
    formData.append('DateStart', this.eventCreateForm.get('eventDateStart').value);
    formData.append('TimeStart', this.eventCreateForm.get('eventTimeStart').value);
    formData.append('DateEnd', this.eventCreateForm.get('eventDateEnd').value);
    formData.append('TimeEnd', this.eventCreateForm.get('eventTimeEnd').value);

    if (window.confirm('Tem a certeza que pretende CRIAR este evento?')) {
      this.api.createEvent(formData).subscribe(data => {
        this.router.navigate(['/admin/events']);
      });
    }
  }

  logout() {
    this.api.setLoggedInStatus(false);
    this.api.logout().subscribe();
    this.router.navigate(['/admin/login']);
    console.log("logout");
  }

}
