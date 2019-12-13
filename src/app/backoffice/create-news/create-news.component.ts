import { Component, OnInit } from '@angular/core';
import {ItemsService} from '../../core/items.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.css']
})
export class CreateNewsComponent implements OnInit {

  API_URL = 'http://localhost:3000';

  newsCreateForm = this.formBuilder.group({
    newsTitle: [''],
    newsShortDescription: [''],
    newsContent: [''],
    newsDate: ['']
  });


  constructor(public api: ItemsService, private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('Title', this.newsCreateForm.get('newsTitle').value);
    formData.append('Short_description', this.newsCreateForm.get('newsShortDescription').value);
    formData.append('Content', this.newsCreateForm.get('newsContent').value);
    formData.append('Date', this.newsCreateForm.get('newsDate').value);

    if (window.confirm('Are you sure, you want to create?')) {
      this.api.createNews(formData).subscribe(data => console.log('Success!', data), error => console.log('ERROR!', error));
    }
  }


}
