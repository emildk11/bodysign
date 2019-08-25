import {Inject, Injectable, LOCALE_ID, Pipe, PipeTransform} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {Tattoo} from './tattoo';
import {Costumer} from './costumer';
import {Observable} from 'rxjs/index';
import {DatePipe} from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class TattooService {

    thisCostumer: Costumer;
    date: Date;
    datePipeEn: DatePipe = new DatePipe('en-US')
   constructor(private db: AngularFirestore,) {
   }

   // gets all tattoos from the chosen costumer
  getAllTattoos(costumer: Costumer): Observable<Tattoo[]> {
    this.thisCostumer = costumer;
     let path = 'costumers/' + costumer.id  + '/tattoos';
    return this.db.collection<Tattoo>(path)
      .valueChanges();
  }

  //Saves the new tattoo on the costumers tattoo list and automatic adds the current date.
  finishedNewTattoo(costumer: Costumer, tattoo: Tattoo): Promise<any> {
    const id = this.db.createId();
    this.thisCostumer = costumer;
    const newTattoo: Tattoo = {
      id: id,
      date: this.datePipeEn.transform(new Date(), 'dd MMMM yyyy'),
      firstColor: tattoo.firstColor,
      firstColorBatch: tattoo.firstColorBatch,
      secondColor: tattoo.secondColor,
      secondColorBatch: tattoo.secondColorBatch,
      thirdColor: tattoo.thirdColor,
      thirdColorBatch: tattoo.thirdColorBatch,
      fourthColor: tattoo.fourthColor,
      fourthColorBatch: tattoo.fourthColorBatch,
      fifthColor: tattoo.fifthColor,
      fifthColorBatch: tattoo.fifthColorBatch,
      sixthColor: tattoo.sixthColor,
      sixthColorBatch: tattoo.sixthColorBatch,
      seventhColor: tattoo.seventhColor,
      seventhColorBatch: tattoo.seventhColorBatch,
      eightColor: tattoo.eightColor,
      eightColorBatch: tattoo.eightColorBatch,
      ninthColor: tattoo.ninthColor,
      ninthColorBatch: tattoo.ninthColorBatch,
      tenthColor: tattoo.tenthColor,
      tenthColorBatch: tattoo.tenthColorBatch
    };
    return this.db.collection('costumers/').doc(this.thisCostumer.id).collection('tattoos/').doc(id).set(newTattoo);
  }
}
