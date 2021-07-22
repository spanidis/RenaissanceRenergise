import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core'

import { faMapMarkerAlt, faCalendarWeek, faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-adding-asset-general',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.css']
})
export class AddingAssetGeneralComponent implements OnInit {

  constructor() { }

  faMapMarkerAlt = faMapMarkerAlt;
  faCalendarWeek = faCalendarWeek;
  faClock = faClock;

  @ViewChild('generalLocation') generalLocation: ElementRef;
  @ViewChild('generalTimezone') generalTimezone: ElementRef;
  @ViewChild('generalStartDateTime') generalStartDateTime: ElementRef;
  @ViewChild('generalTempResolution') generalTempResolution: ElementRef; 

  ngOnInit(): void {
  }

  btnClickClear(){
      console.log("Btn Clear clicked");
      this.generalLocation.nativeElement.value = '';
      this.generalTimezone.nativeElement.value = '';
      this.generalStartDateTime.nativeElement.value = '';
      this.generalTempResolution.nativeElement.value = '';
  }

  btnClickSubmit(){
      console.log("Btn Submit clicked");
    
  }
}
