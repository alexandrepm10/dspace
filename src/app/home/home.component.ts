import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

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

  constructor(public fb: FormBuilder, public actRoute: ActivatedRoute, public router: Router) {

  }

  ngOnInit() {
  }

  onClickSubmit() {
    console.log('Campo: ' + +' selecionado: ' + this.selectedValue);
    // this.router.navigate(['searchitem'], {state: {data: this.selectedValue}});
  }

}
