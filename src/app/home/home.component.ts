import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { ApiService } from '../core/api.service';

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
    termo: new FormControl(''),
  });
  categories: Category[] = [
    {value: '*', viewValue: 'Todos'},
    {value: 'dc.contributor.author', viewValue: 'Autor'},
    {value: 'dc.title', viewValue: 'Titlo'}
  ];
  value = '';

  constructor(private api: ApiService, public fb: FormBuilder, public actRoute: ActivatedRoute, public router: Router) {

  }

  ngOnInit() {
    this.loadHighlightedNews();
  }

  // Get news list
  loadHighlightedNews() {
    return this.api.getNewsHighlighted().subscribe((data: {}) => {
      this.News = data;
    })
  }

  onClickSubmit() {
    console.log('Campo: ' + +' selecionado: ' + this.selectedValue);
    // this.router.navigate(['searchitem'], {state: {data: this.selectedValue}});
  }

}
