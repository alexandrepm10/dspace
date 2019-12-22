import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.css']
})
export class CreateNewsComponent implements OnInit {

  newsCreateForm = this.formBuilder.group({
    newsTitle: [''],
    newsShortDescription: [''],
    newsContent: [''],
    newsImage: [''],
    newsDate: ['']
  });

  constructor(public api: ApiService, private formBuilder: FormBuilder, public router: Router) {
  }

  ngOnInit() {
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.newsCreateForm.get('newsImage').setValue(file);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('Title', this.newsCreateForm.get('newsTitle').value);
    formData.append('Short_description', this.newsCreateForm.get('newsShortDescription').value);
    formData.append('Content', this.newsCreateForm.get('newsContent').value);
    formData.append('file', this.newsCreateForm.get('newsImage').value);
    formData.append('Date', this.newsCreateForm.get('newsDate').value);

    if (window.confirm('Tem a certeza que pretende CRIAR esta notícia?')) {
      this.api.createNews(formData).subscribe(data => {
        this.router.navigate(['/admin']);
      });
    }
  }

  logout() {
    this.api.setLoggedInStatus(false);
    this.api.logout().subscribe();
    this.router.navigate(['admin/login']);
    console.log("logout");
  }

}
