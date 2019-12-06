import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('bg-dark');
  }

  ngOnDestroy(): void {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('bg-dark');
  }

}
