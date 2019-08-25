import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSnackBar, MatTableDataSource} from '@angular/material';
import {Costumer} from '../shared/costumer';
import {CostumerService} from '../shared/costumer.service';
import {TattooService} from '../shared/tattoo.service';
import {Tattoo} from '../shared/tattoo';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-show-tattoos',
  templateUrl: './show-tattoos.component.html',
  styleUrls: ['./show-tattoos.component.css']
})

export class ShowTattoosComponent implements OnInit {

  tattoo: Tattoo;
  tattoos: Tattoo[];
  costumers: Costumer[];
  thisCostumer: Costumer;
  pageLength: number;
  pageLength1: number;
  search: string;
  dataSource = new MatTableDataSource();
  dataSource1 = new MatTableDataSource();
  displayedColumns = ['firstName', 'middleName', 'lastName'];
  displayedColumns1 = ['date', 'firstColor', 'batchNumber1', 'secondColor', 'batchNumber2', 'thirdColor', 'batchNumber3', 'fourthColor', 'batchNumber4', 'fifthColor', 'batchNumber5', 'sixthColor', 'batchNumber6', 'seventhColor', 'batchNumber7', 'eightColor', 'batchNumber8', 'ninthColor', 'batchNumber9', 'tenthColor', 'batchNumber10'];
  @ViewChild('costumerPaginator') costumerPaginator: MatPaginator;
  @ViewChild('tattooPaginator') tattooPaginator: MatPaginator;
  @ViewChild('content') content: ElementRef;
  constructor(private costumerService: CostumerService,
              private tattooService: TattooService,
              private snack: MatSnackBar) { }

  ngOnInit() {

        //when pages loades, get all costumers for the list.
    this.costumerService.getAllCostumers().subscribe( costumers => {
      this.costumers = costumers;
      this.pageLength = this.costumers.length;
      this.dataSource.data = this.costumers;
    });
    this.dataSource.paginator = this.costumerPaginator;

    //when pages loades, get all costumers for the list.
    this.costumerService.getSearchCostumers().subscribe( costumers => {
      this.costumers = costumers;
      this.pageLength = this.costumers.length;
      this.dataSource.data = this.costumers;
    });
    this.dataSource.paginator = this.costumerPaginator;
  }

  //get the selected costumer and all tattoos for the costumer.
  getCostumer(costumer: Costumer) {
    this.thisCostumer = costumer;
    this.tattooService.getAllTattoos(costumer).subscribe( tattoos => {
      this.tattoos = tattoos;
      this.pageLength1 = this.tattoos.length;
      this.dataSource1 = new MatTableDataSource<Tattoo>( this.tattoos);
      this.dataSource1.paginator = this.tattooPaginator;
    });
  }

  //Downloades the data into an PDF
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
      'width': 150,
      'elementHandlers': specialElementHandlers
    });

    doc.save(this.thisCostumer.firstName + '_' + this.thisCostumer.lastName + '.pdf');
  }

  deleteCostumer(costumer: Costumer) {
    this.thisCostumer = costumer;
    this.tattooService.getAllTattoos(costumer).subscribe( tattoos => {
      this.tattoos = tattoos;
      if (this.tattoos.length < 1) {
        this.costumerService.deleteCostumer(this.thisCostumer)
          .then(() => this.snack.open('Customer deleted', '', { duration: 2000 }))
          .catch(error => this.snack.open('Unfortunately, judgement day has come', '', { duration: 4000 }));
      }
      else if (this.tattoos.length > 0) {
        this.snack.open('Can Not delete Customer', '', { duration: 4000 });
      }
    })
  }
}

