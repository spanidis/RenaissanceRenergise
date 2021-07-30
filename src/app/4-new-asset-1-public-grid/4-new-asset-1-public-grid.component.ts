import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { faSave } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-adding-asset-new',
  templateUrl: './4-new-asset-1-public-grid.component.html',
  styleUrls: ['./4-new-asset-1-public-grid.component.css']
})
export class AddingAssetNewComponent implements OnInit {

  constructor() { }

  faSave = faSave;
  isShown: boolean = false ; // hidden by default

  @ViewChild('maxPowerSell') maxPowerSell: ElementRef;
  @ViewChild('maxPowerBuy') maxPowerBuy: ElementRef;
  @ViewChild('sellPrice2Grid') sellPrice2Grid: ElementRef;
  @ViewChild('buyPrice2Grid') buyPrice2Grid: ElementRef; 
  @ViewChild('co2Emissions') co2Emissions: ElementRef; 
  @ViewChild('monthlyPeakCost') monthlyPeakCost: ElementRef;   

  ngOnInit(): void {
  }

  toggleShow() {
    this.isShown = ! this.isShown;    
  }

  btnClickCancel(){
    console.log("Btn Cancel clicked");    
    this.maxPowerSell.nativeElement.value = '';
    this.maxPowerBuy.nativeElement.value = '';
    this.sellPrice2Grid.nativeElement.value = '';
    this.buyPrice2Grid.nativeElement.value = '';
    this.co2Emissions.nativeElement.value = '';
    this.monthlyPeakCost.nativeElement.value = '';
  }

  btnClickAddAsset(){
    console.log("Btn Add Asset clicked");
    //this.router.navigateByUrl('/newprojectadd');
  }
}
