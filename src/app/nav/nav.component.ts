import {Component, OnInit} from '@angular/core';
import {ItemsDetail} from '../core/metadata.model';
import {ApiService} from '../core/api.service';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  navForm = new FormGroup({
      anyTermNav: new FormControl('', [Validators.minLength(4), Validators.maxLength(25)])
    },
    {updateOn: 'blur'});
  value = '';

  constructor(private itemsService: ApiService, public actRoute: ActivatedRoute, public router: Router) {
    this.items = [];
  }

  items: ItemsDetail[];

  ngOnInit() {
  }

  onClickSubmit(navForm: FormGroup) {
    const isValid = navForm.valid;
    console.log(isValid, navForm.value.anyTermNav);
    if (isValid) {
      const navigationExtras: NavigationExtras = {
        queryParams: {
          anyTerm: navForm.value.anyTermNav
        }
      };
      console.log(navigationExtras);
      // this.router.navigate(['items-search'], navigationExtras);
    }
  }
}
