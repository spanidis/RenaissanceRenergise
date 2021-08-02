import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core'

import { faMapMarkerAlt, faCalendarWeek, faClock } from '@fortawesome/free-solid-svg-icons';
import { CoordinatesInteractionService } from '../coordinates-interaction.service';

import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-adding-asset-general',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.css'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ height: 0, opacity: 0 }),
            animate('2s ease-out', 
                    style({ height: 500, opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ height: 500, opacity: 1 }),
            animate('2s ease-in', 
                    style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class AddingAssetGeneralComponent implements OnInit {

  constructor(
    private _coordinatesInteraction: CoordinatesInteractionService
    ) { }

  faMapMarkerAlt = faMapMarkerAlt;
  faCalendarWeek = faCalendarWeek;
  faClock = faClock;
  isGoogleMapsShown: boolean = false; //initialize it to false - not to be shown in the loading of the page

  @ViewChild('generalLocation') generalLocation: ElementRef;
  @ViewChild('generalTimezone') generalTimezone: ElementRef;
  @ViewChild('generalStartDateTime') generalStartDateTime: ElementRef;
  @ViewChild('generalTempResolution') generalTempResolution: ElementRef; 

  ngOnInit(): void {
    this._coordinatesInteraction.coordsMessage$.subscribe(
      message => {
        //alert(message);
        this.generalLocation.nativeElement.value = message;
        this.isGoogleMapsShown = ! this.isGoogleMapsShown;
      }
    )
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

  googleMapsShow() {
    console.log("Btn isGoogleMapsShown clicked: " + this.isGoogleMapsShown);
    this.isGoogleMapsShown = ! this.isGoogleMapsShown;
  }

}
