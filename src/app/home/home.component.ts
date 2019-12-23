import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../core/api.service';

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

  searchForm = new FormGroup({
    title: new FormControl('', [Validators.minLength(4), Validators.maxLength(25)]),
    author: new FormControl('', [Validators.minLength(4), Validators.maxLength(25)]),
    anyTerm: new FormControl('', [Validators.minLength(4), Validators.maxLength(25)])
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
        anyTerm: searchForm.value.anyTerm,
        title: searchForm.value.title,
        author: searchForm.value.author
      }
    };
    console.log(navigationExtras);
    this.router.navigate(['items-search'], navigationExtras);
  }

  getErrorMessage() {
    console.log(this.searchForm.get('anyTerm').value);
    return this.searchForm.get('anyTerm').hasError('minlength') ? 'Número mínimo de caracteres 4' :
      this.searchForm.get('anyTerm').hasError('maxlength') ? 'Número máximo de caracteres 25' :
        '';
  }
}
