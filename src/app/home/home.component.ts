import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../core/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  News: any = [];
  Events: any = [];

  searchForm = new FormGroup({
      title: new FormControl('', [Validators.minLength(4), Validators.maxLength(25)]),
      author: new FormControl('', [Validators.minLength(4), Validators.maxLength(25)]),
      anyTerm: new FormControl('', [Validators.minLength(4), Validators.maxLength(25)])
    },
    {updateOn: 'blur'});
  value = '';
  value1 = '';
  value2 = '';

  constructor(private api: ApiService, public actRoute: ActivatedRoute, public router: Router) {

  }

  ngOnInit() {
    this.loadHighlightedNews();
    this.loadHighlightedEvents();
  }

  // Get news list
  loadHighlightedNews() {
    return this.api.getNewsHighlighted().subscribe((data: {}) => {
      this.News = data;
    });
  }

  loadHighlightedEvents() {
    return this.api.getEventsHighlighted().subscribe((data: {}) => {
      this.Events = data;
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
    return this.searchForm.get('anyTerm').hasError('minlength') ? 'Número mínimo de caracteres 4' :
      this.searchForm.get('anyTerm').hasError('maxlength') ? 'Número máximo de caracteres 25' :
        '';
  }
}
