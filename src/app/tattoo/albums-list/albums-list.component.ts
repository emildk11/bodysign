import { Component, OnInit } from '@angular/core';
import {GalleryService} from '../shared/gallery.service';
import {Observable} from 'rxjs/index';
import { GalleryImage} from '../shared/galleryImage.model';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css']
})
export class AlbumsListComponent implements OnInit {

  images: string;

  constructor(private galleryService: GalleryService) {
  }

  ngOnInit() {
    this.galleryService.getGalleryPictures().getDownloadURL().subscribe();
    //this.images = this.galleryService.getGalleryPictures();
    /*this.image = "https://firebasestorage.googleapis.com/v0/b/bodysigns-93c93.appspot.com/o/BODYBANNER.png?alt=media&token=e6952cd4-d9ac-4796-a206-3266e9fb1e84";*/
  }

}
