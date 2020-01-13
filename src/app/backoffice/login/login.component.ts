import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDetailsForm = this.formBuilder.group({
    user: [''],
    pass: ['']
  });

  constructor(private api: ApiService,
              public actRoute: ActivatedRoute,
              public router: Router,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
  }

  onSubmit() {
    const user = this.loginDetailsForm.get('user').value;
    const pass = this.loginDetailsForm.get('pass').value;

    this.api.loginUser(user, pass).subscribe(data => {
        this.api.setLoggedInStatus(true);
        this.router.navigate(['admin']);
      }
    );

    /*this.api.loginUser(user, pass).pipe() subscribe(data => {
      console.log("RESPOTS: " +data);
      if (data == 1) {
        this.router.navigate(['/admin']);
      }
      else {
        window.alert("INVALID CREDENTIALS!");
      }
    });*/
  }
}
