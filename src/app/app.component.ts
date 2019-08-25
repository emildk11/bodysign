import {Component, OnDestroy, OnInit} from '@angular/core';
import {MediaChange, ObservableMedia} from '@angular/flex-layout';
import {Subscription} from 'rxjs/index';
import {AuthService} from './auth/shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  routes = [
    {route: '', title: 'Home', icon: 'home'},
    {route: '/albums', title: 'Albums', icon: 'folder'},
    {route: '/admin', title: 'Admin', icon: 'folder'},
  ]
  sideNavBar = true;
  watcher: Subscription;
  mode = 'side';
  constructor(media: ObservableMedia,
              private authService: AuthService) {
  this.watcher = media.subscribe((change: MediaChange) => {
    if ( change.mqAlias === 'xs'){
      this.loadMobileContent();
    } else {
      this.loadDashBoardContent();
    }
  });
  }

  ngOnInit() {
  this.authService.isAuthenticated().subscribe(isLoggedIn => {
    this.sideNavBar = isLoggedIn;
  });
  }
  ngOnDestroy() {
    this.watcher.unsubscribe();
  }

  toggleNav() {
    this.sideNavBar = !this.sideNavBar;
  }

  loadDashBoardContent() {
    this.sideNavBar = true;
    this.mode = 'side';
  }

  loadMobileContent() {
    this.sideNavBar = false;
    this.mode = 'over';
  }
}
