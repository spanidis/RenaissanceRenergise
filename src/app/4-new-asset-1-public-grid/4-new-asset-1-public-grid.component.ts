import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { faSave, faFile } from '@fortawesome/free-solid-svg-icons';
import { trigger, style, animate, transition } from '@angular/animations';

import { GlobalConstants } from '../common/global-constants';

@Component({
  selector: 'app-adding-asset-new',
  templateUrl: './4-new-asset-1-public-grid.component.html',
  styleUrls: ['./4-new-asset-1-public-grid.component.css'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ height: 0, opacity: 0 }),
            animate('2s ease-out', 
                    style({ height: 80, opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ height: 80, opacity: 1 }),
            animate('2s ease-in', 
                    style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class AddingAssetNewComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  faSave = faSave;
  faFile = faFile;
  isShown: boolean = false ; // hidden by default

  @ViewChild('max_power_sell') max_power_sell: ElementRef;
  @ViewChild('max_power_buy') max_power_buy: ElementRef;
  @ViewChild('sell_to_grid') sell_to_grid: ElementRef;
  @ViewChild('buy_from_grid') buy_from_grid: ElementRef; 
  @ViewChild('CO2_emissions') CO2_emissions: ElementRef; 
  @ViewChild('monthly_peak_cost') monthly_peak_cost: ElementRef;  
  
  description = GlobalConstants.assetDescription;
  question = GlobalConstants.assetQuestion;
  answer = GlobalConstants.assetAnswer;

  publicForm = this.fb.group({
    max_power_sell: [''],
    max_power_buy: [''],
    sell_to_grid: [''],
    buy_from_grid: [''],
    CO2_emissions: [''],
    monthly_peak_cost: ['']
  });

  ngOnInit(): void {
  }

  toggleShow() {
    this.isShown = ! this.isShown;    
  }

  btnClickClear(){
    if (this.isShown)
    {
      console.log("Btn Clear clicked - Full"); 
      this.max_power_sell.nativeElement.value = '';
      this.max_power_buy.nativeElement.value = '';
      this.sell_to_grid.nativeElement.value = '';
      this.buy_from_grid.nativeElement.value = '';
      this.CO2_emissions.nativeElement.value = '';
      this.monthly_peak_cost.nativeElement.value = '';
    }
    else
    {
      console.log("Btn Clear clicked - Short"); 
      this.max_power_sell.nativeElement.value = '';
      this.max_power_buy.nativeElement.value = '';
      this.sell_to_grid.nativeElement.value = '';
      this.buy_from_grid.nativeElement.value = '';
    }    
  }

  btnClickAddAsset(){
    console.log("Btn Add Asset clicked");
    
  }
}
