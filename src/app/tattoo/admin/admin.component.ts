import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  costumerChoice: boolean;
  tattooChoice: boolean;
  contentChoice: boolean;
  showTattooChoice: boolean;
  menu: boolean;
  backMenu: boolean;
  constructor() { }

  ngOnInit() {
    this.menu = true;
    this.backMenu = false;
  }

  //Simple booleans to control the menu
  newTattoo() {
    this.tattooChoice = true;
    this.costumerChoice = false;
    this.contentChoice = false;
    this.showTattooChoice = false;
    this.menu = false;
    this.backMenu = true;
  }

  //Simple booleans to control the menu
  back() {
    this.menu = true;
    this.backMenu = false;
    this.tattooChoice = false;
    this.costumerChoice = false;
    this.contentChoice = false;
    this.showTattooChoice = false;
  }

  //Simple booleans to control the menu
  createCostumer() {
    this.costumerChoice = true;
    this.tattooChoice = false;
    this.contentChoice = false;
    this.showTattooChoice = false;
    this.menu = false;
    this.backMenu = true;
  }

  //Simple booleans to control the menu
  newContent() {
    this.contentChoice = true;
    this.tattooChoice = false;
    this.costumerChoice = false;
    this.showTattooChoice = false;
    this.menu = false;
    this.backMenu = true;
  }

  //Simple booleans to control the menu
  viewCostumer() {
    this.showTattooChoice = true;
    this.contentChoice = false;
    this.tattooChoice = false;
    this.costumerChoice = false;
    this.menu = false;
    this.backMenu = true;
  }

}
