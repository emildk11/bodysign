import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TattooService} from './shared/tattoo.service';
import {AdminComponent} from './admin/admin.component';
import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatPaginatorModule,
  MatSidenavModule,
  MatSnackBarModule, MatSortModule, MatTableModule, MatToolbarModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AlbumsListComponent} from './albums-list/albums-list.component';
import {CostumerService} from './shared/costumer.service';
import {BodysignsComponent} from './bodysigns/bodysigns.component';
import {GalleryService} from './shared/gallery.service';
import {AngularFireStorageModule} from 'angularfire2/storage';
import { TattooListComponent } from './tattoo-list/tattoo-list.component';
import { CostumerComponent } from './costumer/costumer.component';
import { ShowTattoosComponent } from './show-tattoos/show-tattoos.component';
import {UploadDirective} from '../shared/directives/upload.directive';
import {FileSystemModule} from '../file-system/file-system.module';
import { ChangeContentComponent } from './change-content/change-content.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    FileSystemModule
  ],
  declarations: [AdminComponent, AlbumsListComponent, BodysignsComponent, TattooListComponent, CostumerComponent, ShowTattoosComponent, ChangeContentComponent],
  providers: [TattooService, CostumerService, GalleryService, UploadDirective]
})
export class TattooModule { }
