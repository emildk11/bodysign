import { Injectable } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs/index';
import { GalleryImage} from './galleryImage.model';
import UploadTask = firebase.storage.UploadTask;

@Injectable({
  providedIn: 'root'
})
export class GalleryService {


  constructor(private storage: AngularFireStorage) { }

  getGalleryPictures(){
    return this.storage.ref('Gallery');
  }

  /*upload (path: string, file: File): UploadTask {
    const task = this.storage.upload(path, file);
    return {
      downloadUrl: task.downloadURL()
    };
  }*/
}
