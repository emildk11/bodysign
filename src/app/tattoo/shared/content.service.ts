import { Injectable, OnInit } from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs/index';
import {Day} from './day';
import {Shop} from './shop';
import {BsContent} from './bs.content';





@Injectable({
  providedIn: 'root'
})
export class ContentService {

  day: Day;
  bsContent: BsContent;
  shop: Shop;

    constructor(private db: AngularFirestore) {
    }

    //Returns all array with all days
  getAllDays(): Observable<Day[]> {
    return this.db.collection<Day>('hours', ref => ref.orderBy('number')).valueChanges();
  }

  //Updates the chosen date with the chosen data.
  updateDay(day: Day) {
      this.day = day;
      var dbRef = this.db.collection('hours').doc(this.day.name);
      return dbRef.update({timeFrom: this.day.timeFrom, timeTo: this.day.timeTo})
        .then(function () {
          console.log("Document successfully updated!");
        })
        .catch(function (error) { console.error("Error updating document: ", error);
      });
  }

  //Returns an array with company data, only one company is in the array.
  getShopInfo(): Observable<Shop[]> {
    return this.db.collection<Shop> ('shop').valueChanges();
  }

  //Updates the chosen copmany, with the chosen data.
  updateInformation(shop: Shop) {
      this.shop = shop;
    var dbRef = this.db.collection('shop').doc('information');
    return dbRef.update({adress: this.shop.adress , city: this.shop.city, email: this.shop.email, name: this.shop.shopName, phone: this.shop.phone, zipcode: this.shop.zipcode})
      .then(function () {
        console.log("Document successfully updated!");
      })
      .catch(function (error) { console.error("Error updating document: ", error);
      });
  }

  //Returns an array with content data for the bottom.
  getBottomContentInfo(): Observable<BsContent[]> {
    return this.db.collection<BsContent> ('bottom').valueChanges();
  }

  //Returns an array with content data for the top.
  getTopContentInfo(): Observable<BsContent[]> {
    return this.db.collection<BsContent> ('top').valueChanges();
  }

  //Updates the chosen content with the chosen data.
  updateContent(content: BsContent) {
    this.bsContent = content;
    var dbRef = this.db.collection('content').doc(this.bsContent.name);
    return dbRef.update({headline: this.bsContent.headline, bsContent: this.bsContent.bsContent})
      .then(function () {
        console.log("Document successfully updated!");
      })
      .catch(function (error) { console.error("Error updating document: ", error);
      });
  }

  //Updates the chosen content with the chosen data.
  updateBottomContent(content: BsContent) {
    this.bsContent = content;
    var dbRef = this.db.collection('bottom').doc(this.bsContent.name);
    return dbRef.update({headline: this.bsContent.headline, bsContent: this.bsContent.bsContent})
      .then(function () {
        console.log("Document successfully updated!");
      })
      .catch(function (error) { console.error("Error updating document: ", error);
      });
  }

  //Updates the chosen content with the chosen data.
  updateTopContent(content: BsContent) {
    this.bsContent = content;
    var dbRef = this.db.collection('top').doc(this.bsContent.name);
    return dbRef.update({headline: this.bsContent.headline, bsContent: this.bsContent.bsContent})
      .then(function () {
        console.log("Document successfully updated!");
      })
      .catch(function (error) { console.error("Error updating document: ", error);
      });
  }

}
