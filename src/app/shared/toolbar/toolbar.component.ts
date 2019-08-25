import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from '../../auth/shared/auth.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  isLoggedIn: boolean;
  @Output()
  navToggle = new EventEmitter();
  constructor(private authService: AuthService,
              private snack: MatSnackBar,
              private router: Router) { }

  ngOnInit() {
    //When the user is logged in ísLoggedIn is set to true.
    this.authService.isAuthenticated()
      .subscribe(isLogged => {
        this.isLoggedIn = isLogged;
    });
  }

  //function to react on clicks on the toggle button for the navBar.
  toggleNav() {
    this.navToggle.emit();
  }

  //through the function logout in authService, the user is logged out.
  logout() {
    this.authService.logout()
      .then( () => {
        this.router.navigateByUrl('bodysigns')
          .then( () => this.snack.open('Logged Out', '', {
            duration: 1500
      }));
      })
      .catch(error => {
        this.snack.open(error.message, '', {
          duration: 1500
        });
      });
  }

  //through the function logout in authService, the user is logged out and returned to the login page.
  login() {
    this.authService.logout()
      .then( () => {
        this.router.navigateByUrl('login')
          .then( () => this.snack.open('Going to Login Page', '', {
            duration: 1500
          }));
      })
      .catch(error => {
        this.snack.open(error.message, '', {
          duration: 1500
        });
      });
  }
}
