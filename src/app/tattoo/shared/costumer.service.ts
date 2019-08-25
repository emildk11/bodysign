import { Injectable } from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {Costumer} from './costumer';
import {Observable} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class CostumerService {

  thisCostumer: Costumer;
  constructor(private db: AngularFirestore) { }

  //Returns an array with all costumers
  getAllCostumers(): Observable<Costumer[]> {
    return this.db.collection<Costumer>('costumers', ref => ref.orderBy('firstName')).valueChanges();
  }

  //Returns an array with all costumers that matches the Search
  getSearchCostumers(): Observable<Costumer[]> {
    return this.db.collection<Costumer>('costumers', ref => ref.orderBy('firstName')).valueChanges();
  }

  //Creates a new costumer and adds it to the collection in firebase.
  createNewCostumer(costumer: Costumer): Promise<any> {
    const id = this.db.createId();
    const newCostumer: Costumer = {
      id: id,
      firstName: costumer.firstName,
      middleName: costumer.middleName,
      lastName: costumer.lastName
    };
    this.thisCostumer = newCostumer;
    return this.db.collection('costumers/').doc(id).set(newCostumer);
  }

  //Delete the selected costumer from the collection in firebase.
  deleteCostumer(costumer: Costumer): Promise<any> {
    return this.db.collection('costumers/').doc(costumer.id).delete();

  }
}
