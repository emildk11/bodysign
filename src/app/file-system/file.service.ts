import { Injectable } from '@angular/core';
import {AngularFireStorage, AngularFireUploadTask} from 'angularfire2/storage';
import * as path from 'path';
import {UploadTask} from '../tattoo/shared/upload-task';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private storage: AngularFireStorage) {
    }
  /*upload (path: string, file: File): UploadTask {
    const task = this.storage.upload(path, file);
    return {
      downloadUrl: task.downloadUrl()
    };
  }*/
}
