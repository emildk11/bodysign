import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/index';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth) {
  }

  //the user gets logged in, if email/password matches values in fireAuth.
  login(email: string, password: string): Promise<any> {
    return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
  }

  //signs out the logged in user.
  logout(): Promise<any> {
    return this.fireAuth.auth.signOut();
  }

  //returns true if the user is logged in.
  isAuthenticated(): Observable<boolean> {
    return this.fireAuth.authState
      .pipe(map(authState => {
        return authState !== null;
      }));
  }
}
