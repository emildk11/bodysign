import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './/app-routing.module';
import { MatIconModule, MatListModule, MatSidenavModule} from '@angular/material';
import { FlexLayoutModule} from '@angular/flex-layout';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { UploadDirective } from './shared/directives/upload.directive';
import { TattooModule } from './tattoo/tattoo.module';
import { SharedModule } from './shared/shared.module';
import { FileDetailsComponent } from './file-system/file-details/file-details.component';
import { FileSystemContainerComponent } from './file-system/file-system-container/file-system-container.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadDirective,
    FileDetailsComponent,
    FileSystemContainerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AppRoutingModule,
    MatSidenavModule,
    MatListModule,
    SharedModule,
    MatIconModule,
    FlexLayoutModule,
    TattooModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
