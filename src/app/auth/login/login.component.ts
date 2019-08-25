import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


    loginForm: FormGroup;
  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private snack: MatSnackBar,
              private route: Router) {
    this.loginForm = fb.group( {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  ngOnInit() {
  }

  // form values are parsed into function login in authService.
  // If the values match the values in fireAuth, the user is accepted.
  login() {
    const loginModel = this.loginForm.value;
    this.authService.login(loginModel.email,loginModel.password)
      .then (() => {
      this.route.navigateByUrl('admin')
        .then( () => this.snack.open('Logged In', '', {
          duration: 1500
        }));
      })
      .catch(error => {
        this.snack.open(error.message, '', {
          duration: 1500
        });
      });
  }

  //Error handler for login
  fcErr(fc: string, ec:string, pre?:string[]): boolean {
    if(pre && pre.length >0) {
      for (let i = 0; i < pre.length; i++) {
        if(this.loginForm.get(fc).hasError(pre[i])) {
          return false;
        }
       }
      }
      return this.loginForm.get(fc).hasError(ec);
  }
}
