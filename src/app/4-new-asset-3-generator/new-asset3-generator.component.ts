import { Component, OnInit } from '@angular/core';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { ViewChild, ElementRef } from '@angular/core';
import { GlobalConstants } from '../common/global-constants';
import { FormBuilder } from '@angular/forms';

import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-new-asset3-generator',
  templateUrl: './new-asset3-generator.component.html',
  styleUrls: ['./new-asset3-generator.component.css'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ height: 0, opacity: 0 }),
            animate('2s ease-out', 
                    style({ height: 40, opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ height: 40, opacity: 1 }),
            animate('2s ease-in', 
                    style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class NewAsset3GeneratorComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  faFile = faFile;

  @ViewChild('max_power') max_power: ElementRef;
  @ViewChild('money_per_kWh') money_per_kWh: ElementRef;
  @ViewChild('power_profile') power_profile: ElementRef;
  
  description = GlobalConstants.assetDescription;
  question = GlobalConstants.assetQuestion;
  answer = GlobalConstants.assetAnswer;

  generatorForm = this.fb.group({
    max_power: [''],
    money_per_kWh: [''],
    power_profile: ['']
  });
  
  ngOnInit(): void {
  }

  isShown: boolean = false ; // hidden by default
  toggleShow() {
    this.isShown = ! this.isShown;    
  }

  btnClickClear(){    
    if (this.isShown)
    {
      console.log("Btn Clear clicked - Full"); 
      this.max_power.nativeElement.value = '';  
      this.money_per_kWh.nativeElement.value = '';  
      this.power_profile.nativeElement.value = '';
    }
    else
    {
      console.log("Btn Clear clicked - Short"); 
      this.max_power.nativeElement.value = '';  
      this.power_profile.nativeElement.value = '';
    }  
  }

  btnClickAddAsset(){
    console.log("Btn Add Asset clicked");
  }
}
