import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSnackBar, MatTableDataSource} from '@angular/material';
import {Costumer} from '../shared/costumer';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CostumerService} from '../shared/costumer.service';
import {Tattoo} from '../shared/tattoo';
import {TattooService} from '../shared/tattoo.service';

@Component({
  selector: 'app-costumer',
  templateUrl: './costumer.component.html',
  styleUrls: ['./costumer.component.css']
})
export class CostumerComponent implements OnInit {

  firstChoice: boolean;
  createCostumerForm: FormGroup;
  thisCostumer: Costumer;
  costumers: Costumer[];
  pageLength: number;
  dataSource = new MatTableDataSource();
  displayedColumns = ['firstName', 'middleName', 'lastName'];
  @ViewChild('costumerPaginator') costumerPaginator: MatPaginator;
  constructor(private fb: FormBuilder,
              private costumerService: CostumerService,
              private tattooService: TattooService,
              private snack: MatSnackBar) { }

  ngOnInit() {

    this.createCostumerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      middleName: '',
      lastName: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  //Method that sends the from data to the Costumerservice to create a new Costumer.
  createCostumer() {
    const form = this.createCostumerForm.value;
    const newCostumer: Costumer = {
      firstName: form.firstName,
      middleName: form.middleName,
      lastName: form.lastName,
    };
    this.thisCostumer = newCostumer;
    this.costumerService
      .createNewCostumer(newCostumer)
      .then( () => {
        this.snack.open("Costumer has been Created", "", {duration: 2000});
      })
      .catch( error => {
        this.snack.open("Costumer was NOT created", "", { duration: 2000});
      });
  }

  //Error handling
  fcErr(fc: string, ec:string, pre?:string[]): boolean {
    if(pre && pre.length >0) {
      for (let i = 0; i < pre.length; i++) {
        if(this.createCostumerForm.get(fc).hasError(pre[i])) {
          return false;
        }
      }
    }
    return this.createCostumerForm.get(fc).hasError(ec);
  }

}
