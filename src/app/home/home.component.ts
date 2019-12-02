import {Component, OnInit} from '@angular/core';
import {SelectItem} from 'primeng/api';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';

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

  categories: Category[];
  item: string;
  form: any;

  constructor(public fb: FormBuilder, public actRoute: ActivatedRoute, public router: Router) {

    this.form = this.fb.group({
      category: ['']
    });

    this.categories = [
      {value: 'Antropologia Cultural', viewValue: 'Antropologia Cultural'},
      {value: 'Etnografia', viewValue: 'Etnografia'},
      {value: 'Antropologia da Religião', viewValue: 'Antropologia da Religião'}
    ];
  }

  ngOnInit() {
  }

  onClickSubmit() {
    console.log(this.form.value.category.value);
    this.router.navigate(['searchitem'], {state: {data: this.form.value.category.value}});
  }

}
