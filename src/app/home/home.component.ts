import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

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

  categories: Category[] = [
    { value: 'Antropologia Cultural', viewValue: 'Antropologia Cultural' },
    { value: 'Etnografia', viewValue: 'Etnografia' },
    { value: 'Antropologia da Religião', viewValue: 'Antropologia da Religião' }
  ];

  constructor(public fb: FormBuilder, public actRoute: ActivatedRoute, public router: Router) {

  }

  ngOnInit() {
  }

  onClickSubmit() {
    console.log(this.selectedValue);
    this.router.navigate(['searchitem'], {state: {data: this.selectedValue}});
  }

}
