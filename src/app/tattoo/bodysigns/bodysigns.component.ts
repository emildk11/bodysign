import { Component, OnInit } from '@angular/core';
import {ContentService} from '../shared/content.service';
import {Day} from '../shared/day';
import {MatTableDataSource} from '@angular/material';
import {Shop} from '../shared/shop';
import {BsContent} from '../shared/bs.content';

@Component({
  selector: 'app-bodysigns',
  templateUrl: './bodysigns.component.html',
  styleUrls: ['./bodysigns.component.css',
    './css/animate.css',
    './css/prettyPhoto.css',
    './css/responsive.css',
    './css/retina.css']
})
export class BodysignsComponent implements OnInit {

  sideNavBar = true;
  mode = 'side';
  day: Day[];
  shop: Shop;
  bsBottomContent: BsContent;
  bsTopContent: BsContent;
  dataSource = new MatTableDataSource();
  displayedColumns = ['day', 'timeFrom', 'timeTo'];
  header2: string;


  constructor(private contentService: ContentService) { }

  ngOnInit() {
    //Get the array with opening hours for the shop.
    this.contentService.getAllDays().subscribe( day => {
      this.day = day;
      this.dataSource.data = this.day;
    });

    //Get the first content in the array with content for the bottom
    this.contentService.getBottomContentInfo().subscribe( bottomContent => {
      this.bsBottomContent = bottomContent[0];
    });

    //Get the first content in the array with content for the top
    this.contentService.getTopContentInfo().subscribe( topContent => {
      this.bsTopContent = topContent[0];
    });

    //Get the first shop in the array with shop info for the shop.
    this.contentService.getShopInfo().subscribe( shop => {
      this.shop = shop[0];
    });
  }

}
