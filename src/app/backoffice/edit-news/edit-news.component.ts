import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../core/api.service';
import {ActivatedRoute, Router} from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { News } from '../../core/news';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {

  API_URL = 'http://localhost:3000';

  id = this.actRoute.snapshot.params['id'];

  newsData: News;

  newsDetailsForm = this.formBuilder.group({
    newsTitle: [''],
    newsShortDescription: [''],
    newsContent: [''],
    newsDate: ['']
  });


  constructor(private api: ApiService,
              public actRoute: ActivatedRoute,
              public router: Router,
              private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.actRoute.queryParams.subscribe(queryParams => {
      // do something with the query params
    });
    this.actRoute.params.subscribe(routeParams => {
      this.loadNewsDetails(routeParams.id);
    });

  }

  // Get patient details
  loadNewsDetails(id) {
    return this.api.getSingleNews(id).subscribe((data: News) => {
      this.newsData = data;
      this.newsDetailsForm.get('newsTitle').setValue(this.newsData.Title);
      this.newsDetailsForm.get('newsShortDescription').setValue(this.newsData.Short_description);
      this.newsDetailsForm.get('newsContent').setValue(this.newsData.Content);
      this.newsDetailsForm.get('newsDate').setValue(this.newsData.Date);
    });
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('Title', this.newsDetailsForm.get('newsTitle').value);
    formData.append('Short_description', this.newsDetailsForm.get('newsShortDescription').value);
    formData.append('Content', this.newsDetailsForm.get('newsContent').value);
    formData.append('Date', this.newsDetailsForm.get('newsDate').value);

    if (window.confirm('Are you sure, you want to edit?')) {
      this.api.updateNews(this.id, formData).subscribe(
        data => console.log('Success!', data),
        error => console.log('ERROR!', error)
      );
    }
  }



}
