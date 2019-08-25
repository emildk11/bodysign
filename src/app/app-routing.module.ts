import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AlbumsListComponent} from './tattoo/albums-list/albums-list.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthModule} from './auth/auth.module';
import {LoginComponent} from './auth/login/login.component';
import {AuthGuard} from './auth/shared/auth-guard.service';
import {LoggedInGuard} from './auth/shared/logged-in.guard';
import {AdminComponent} from './tattoo/admin/admin.component';
import {BodysignsComponent} from './tattoo/bodysigns/bodysigns.component';
import {TattooModule} from './tattoo/tattoo.module';



const routes: Routes = [
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  { path: 'albums', component: AlbumsListComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent, canActivate: [LoggedInGuard]},
  { path: 'bodysigns', component: BodysignsComponent},
  { path: '', redirectTo: '/bodysigns', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    AuthModule,
    TattooModule
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
