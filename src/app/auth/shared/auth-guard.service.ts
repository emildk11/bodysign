import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) { }

  // if isAuthenticated returns false, the user is routed to the login page.
  canActivate() {
    return this.authService.isAuthenticated()
      .pipe(map(isLoggedIn => {
        if(!isLoggedIn) {
          this.router.navigateByUrl('login');
        }
        return isLoggedIn;
      }));
  }
}
