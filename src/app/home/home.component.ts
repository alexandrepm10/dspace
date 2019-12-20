import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ApiService} from '../core/api.service';
import {stringify} from 'querystring';

export interface Category {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  News: any = [];

  selectedValue: string;

  searchForm = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    any: new FormControl('')
  });
  value = '';
  value1 = '';
  value2 = '';

  constructor(private api: ApiService, public fb: FormBuilder, public actRoute: ActivatedRoute, public router: Router) {

  }

  ngOnInit() {
    this.loadHighlightedNews();
  }

  // Get news list
  loadHighlightedNews() {
    return this.api.getNewsHighlighted().subscribe((data: {}) => {
      this.News = data;
    });
  }

  onClickSubmit(searchForm: FormGroup) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        any: searchForm.value.any,
        title: searchForm.value.title,
        author: searchForm.value.author
      }
    };
    console.log(navigationExtras);
    this.router.navigate(['items-search'], navigationExtras);
  }

}
