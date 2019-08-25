import {Component, OnInit} from '@angular/core';
import {ContentService} from '../shared/content.service';
import {MatSnackBar, MatTableDataSource} from '@angular/material';
import {Day} from '../shared/day';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BsContent} from '../shared/bs.content';
import {Shop} from '../shared/shop';


@Component({
  selector: 'app-change-content',
  templateUrl: './change-content.component.html',
  styleUrls: ['./change-content.component.css']
})
export class ChangeContentComponent implements OnInit {

  changeTimeForm: FormGroup;
  changeShopForm: FormGroup;
  changeBottomContentForm: FormGroup;
  changeTopContentForm: FormGroup;
  storeHours: boolean;
  storeInfo: boolean;
  sideContent: boolean;
  thisDay: Day;
  thisContent: BsContent;
  thisShop: Shop;
  days: Day[];
  day: Day;
  shop: Shop;
  shops: Shop[];
  shopName: string;
  phone: string;
  email: string;
  adress: string;
  zipcode: string;
  city: string;
  name: string;
  headline: string;
  content: string;
  dataSource = new MatTableDataSource();
  dataSource1 = new MatTableDataSource();
  displayedColumns = ['day', 'timeFrom', 'timeTo'];
  displayedColumns1 = ['name', 'adress', 'zipcode', 'city', 'email', 'phone'];
  private snack: MatSnackBar
  constructor(private contentService: ContentService,
              private fb: FormBuilder,) { }

  ngOnInit() {
    //Simple boolean to control the menu
    this.storeHours = false;
    this.storeInfo = false;
    this.sideContent = false;

    this.changeBottomContentForm = this.fb.group({
      name: '',
      headline: '',
      bsContent: '',
    });

    this.changeTopContentForm = this.fb.group({
      name: '',
      headline: '',
      bsContent: '',
    });

    this.changeTimeForm = this.fb.group({
      name: '',
      timeFrom: '',
      timeTo: ''
    });

    this.changeShopForm = this.fb.group({
      shopName: '',
      phone: '',
      email: '',
      adress: '',
      zipcode: '',
      city: ''
    });

    //Get the info for the shop wneh this page is loading
      this.contentService.getShopInfo().subscribe( shop => {
        this.shops = shop;
        this.dataSource1.data = this.shops;
      });

  }

  //Method to get the array with opening hours for the shop and close the other menues.
  getAllDays() {
    this.storeHours = true;
    this.sideContent = false;
    this.storeInfo = false;
    this.contentService.getAllDays().subscribe( day => {
      this.days = day;
      this.dataSource.data = this.days;
    });
  }

  //Method that sets the selected day.
  getDay(day: Day) {
    this.thisDay = day;
  }

  //Method that gets the selected shop
  getShop(shop: Shop) {
    this.thisShop = shop;
  }

  //Simple boolean to control the menu
  changeContentMenu() {
    this.sideContent = true;
    this.storeHours = false;
    this.storeInfo = false;
  }

  //Simple boolean to control the menu
  changeStoreInfo() {
    this.storeInfo = true;
    this.sideContent = false;
    this.storeHours = false;
  }

  //Method that sends the data from the form to the content service so it can update the opening hours for the selected day.
  changeTime(){
  const form = this.changeTimeForm.value;
  const newDay: Day = {
    name: form.name,
    timeFrom: form.timeFrom,
    timeTo: form.timeTo
  };
  this.thisDay = newDay;
  this.contentService.updateDay(this.thisDay);
  }

  //Method that sends the data from the form to the content service so it can update the shopinfo for the selected shop.
  changeShop(){
    const form = this.changeShopForm.value;
    const newShop: Shop = {
      shopName: form.shopName,
    phone: form.phone,
    email: form.email,
    adress: form.adress,
    zipcode: form.zipcode,
    city: form.city
    };
    this.thisShop = newShop;
    this.contentService.updateInformation(this.thisShop);
  }

  //Method that sends the data from the form to the content service so it can update the content.
  changeBottomContent(){
    const form = this.changeBottomContentForm.value;
    const newContent: BsContent = {
      name: form.name,
      headline: form.headline,
      bsContent: form.bsContent,
    };
    this.thisContent = newContent;
    this.contentService.updateBottomContent(this.thisContent);
  }

  //Method that sends the data from the form to the content service so it can update the content.
  changeTopContent(){
    const form = this.changeTopContentForm.value;
    const newContent: BsContent = {
      name: form.name,
      headline: form.headline,
      bsContent: form.bsContent,
    };
    this.thisContent = newContent;
    this.contentService.updateTopContent(this.thisContent);
  }

}
