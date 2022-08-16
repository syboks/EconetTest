import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = ''
  password = ''
  invalidLogin = false

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin() {
    console.log(this.username);
    console.log(this.password);
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
      this.router.navigate(['countries']);
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }

  //Needed to do validation for password and username complexity.

}
