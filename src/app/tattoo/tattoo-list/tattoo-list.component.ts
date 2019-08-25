import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSnackBar, MatTableDataSource} from '@angular/material';
import {Costumer} from '../shared/costumer';
import {CostumerService} from '../shared/costumer.service';
import {TattooService} from '../shared/tattoo.service';
import {Tattoo} from '../shared/tattoo';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import {$} from 'protractor';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-tattoo-list',
  templateUrl: './tattoo-list.component.html',
  styleUrls: ['./tattoo-list.component.css']
})
export class TattooListComponent implements OnInit {

  tattoo: Tattoo;
  tattoos: Tattoo[];
  costumers: Costumer[];
  thisCostumer: Costumer;
  pageLength: number;
  pageLength1: number;
  finishedTattooForm: FormGroup;
  dataSource = new MatTableDataSource();
  dataSource1 = new MatTableDataSource();
  displayedColumns = ['firstName', 'middleName', 'lastName'];
  displayedColumns1 = ['date', 'firstColor', 'batchNumber1', 'secondColor', 'batchNumber2', 'thirdColor', 'batchNumber3', 'fourthColor', 'batchNumber4', 'fifthColor', 'batchNumber5', 'sixthColor', 'batchNumber6', 'seventhColor', 'batchNumber7', 'eightColor', 'batchNumber8', 'ninthColor', 'batchNumber9', 'tenthColor', 'batchNumber10'];
  @ViewChild('costumerPaginator') costumerPaginator: MatPaginator;
  @ViewChild('tattooPaginator') tattooPaginator: MatPaginator;
  @ViewChild('content') content: ElementRef;
  constructor(private costumerService: CostumerService,
              private fb: FormBuilder,
              private tattooService: TattooService,
              private snack: MatSnackBar) { }

  ngOnInit() {
    //gets all costumers when the page loads.
    this.costumerService.getAllCostumers().subscribe( costumers => {
      this.costumers = costumers;
      this.pageLength = this.costumers.length;
      this.dataSource.data = this.costumers;
    });
    this.dataSource.paginator = this.costumerPaginator;

    this.finishedTattooForm = this.fb.group({
      firstColor: ['', [Validators.required, Validators.minLength(2)]],
      firstColorBatch: ['', [ Validators.required, Validators.minLength(2)]],
      secondColor: ['', [Validators.minLength(2)]],
      secondColorBatch: ['', [Validators.minLength(2)]],
      thirdColor: ['', [Validators.minLength(2)]],
      thirdColorBatch: ['', [Validators.minLength(2)]],
      fourthColor: ['', [Validators.minLength(2)]],
      fourthColorBatch: ['', [Validators.minLength(2)]],
      fifthColor: ['', [Validators.minLength(2)]],
      fifthColorBatch: ['', [Validators.minLength(2)]],
      sixthColor: ['', [Validators.minLength(2)]],
      sixthColorBatch: ['', [Validators.minLength(2)]],
      seventhColor: ['', [Validators.minLength(2)]],
      seventhColorBatch: ['', [Validators.minLength(2)]],
      eightColor: ['', [Validators.minLength(2)]],
      eightColorBatch: ['', [Validators.minLength(2)]],
      ninthColor: ['', [Validators.minLength(2)]],
      ninthColorBatch: ['', [Validators.minLength(2)]],
      tenthColor: ['', [Validators.minLength(2)]],
      tenthColorBatch: ['', [Validators.minLength(2)]],
    });
  }

  //gets the selected costumer
  getCostumer(costumer: Costumer) {
    this.thisCostumer = costumer;
    this.tattooService.getAllTattoos(costumer).subscribe( tattoos => {
      this.tattoos = tattoos;
      this.pageLength1 = this.tattoos.length;
      this.dataSource1 = new MatTableDataSource<Tattoo>( this.tattoos);
      this.dataSource1.paginator = this.tattooPaginator;
    });
  }

  //Downloads the information to a PDF file.
  downLoadPDF(costumer: Costumer) {
    this.thisCostumer = costumer;
    let doc = new jsPDF();
    let specialElementHandlers = {
      '#editor': function(element, renderer) {
        return true;
      }
    };
    let content = this.content.nativeElement;
    doc.fromHTML(content.innerHTML, 15,15, {
    'width': 190,
      'elementHandlers': specialElementHandlers
    });
    doc.save(this.thisCostumer.firstName + '_' + this.thisCostumer.lastName + '.pdf');
  }

  //Gets data fra the form field and sends it to the service.
  finishedTattoo(costumer: Costumer) {
    const form = this.finishedTattooForm.value;
    this.thisCostumer = costumer;
    const newtT: Tattoo = {
      date: null,
      firstColor: form.firstColor,
      firstColorBatch: form.firstColorBatch,
      secondColor: form.secondColor,
      secondColorBatch: form.secondColorBatch,
      thirdColor: form.thirdColor,
      thirdColorBatch: form.thirdColorBatch,
      fourthColor: form.fourthColor,
      fourthColorBatch: form.fourthColorBatch,
      fifthColor: form.fifthColor,
      fifthColorBatch: form.fifthColorBatch,
      sixthColor: form.sixthColor,
      sixthColorBatch: form.sixthColorBatch,
      seventhColor: form.seventhColor,
      seventhColorBatch: form.seventhColorBatch,
      eightColor: form.eightColor,
      eightColorBatch: form.eightColorBatch,
      ninthColor: form.ninthColor,
      ninthColorBatch: form.ninthColorBatch,
      tenthColor: form.tenthColor,
      tenthColorBatch: form.tenthColorBatch,
    };
    this.tattooService
      .finishedNewTattoo(this.thisCostumer, newtT)
      .then( () => {
        this.snack.open("Tattoo Created", "", {duration: 2000});
      })
      .catch( error => {
        this.snack.open("Tattoo was NOT created", "", { duration: 2000});
      });
  }

  //Error handling
  fcErr1(fc: string, ec:string, pre?:string[]): boolean {
    if(pre && pre.length >0) {
      for (let i = 0; i < pre.length; i++) {
        if(this.finishedTattooForm.get(fc).hasError(pre[i])) {
          return false;
        }
      }
    }
    return this.finishedTattooForm.get(fc).hasError(ec);
  }
}
