import { Component, OnInit } from '@angular/core';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { ViewChild, ElementRef } from '@angular/core';
import { GlobalConstants } from '../common/global-constants';
import { FormBuilder } from '@angular/forms';

import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-new-asset7-wind',
  templateUrl: './new-asset7-wind.component.html',
  styleUrls: ['./new-asset7-wind.component.css'],
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
export class NewAsset7WindComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  faFile = faFile;

  @ViewChild('v_cin') v_cin: ElementRef;
  @ViewChild('v_cout') v_cout: ElementRef;
  @ViewChild('v_rated') v_rated: ElementRef;
  @ViewChild('p_rated') p_rated: ElementRef; 
  @ViewChild('money_per_kWh') money_per_kWh: ElementRef; 
  @ViewChild('wind_speed') wind_speed: ElementRef; 
  @ViewChild('power_profile') power_profile: ElementRef; 
  
  description = GlobalConstants.assetDescription;
  question = GlobalConstants.assetQuestion;
  answer = GlobalConstants.assetAnswer;
  
  windForm = this.fb.group({
    v_cin: [''],
    v_cout: [''],
    v_rated: [''],
    p_rated: [''],
    money_per_kWh: [''],
    wind_speed: [''],
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
      this.v_cin.nativeElement.value = '';
      this.v_cout.nativeElement.value = '';
      this.v_rated.nativeElement.value = '';
      this.p_rated.nativeElement.value = '';
      this.money_per_kWh.nativeElement.value = '';
      this.wind_speed.nativeElement.value = '';
      this.power_profile.nativeElement.value = '';
    }
    else
    {
      console.log("Btn Clear clicked - Short"); 
      this.v_cin.nativeElement.value = '';
      this.v_cout.nativeElement.value = '';
      this.v_rated.nativeElement.value = '';
      this.p_rated.nativeElement.value = '';
      this.wind_speed.nativeElement.value = '';
      this.power_profile.nativeElement.value = '';
    }   
  }

  btnClickAddAsset(){
    console.log("Btn Add Asset clicked");
    //this.router.navigateByUrl('/newprojectadd');
  }
}
