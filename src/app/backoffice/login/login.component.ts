import {Component, OnInit} from '@angular/core';
import {ItemsService} from '../../core/items.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private itemsService: ItemsService, public actRoute: ActivatedRoute, public router: Router) {
  }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('bg-dark');
  }

  onClickSubmit(logindata) {
    console.log(logindata);
    this.router.navigate(['login'], {state: {data: logindata}});
  }

}
