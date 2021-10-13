import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { GlobalConstants } from '../common/global-constants';
import { FormBuilder } from '@angular/forms';

import { faMapMarkerAlt, faCalendarWeek, faClock, faFile } from '@fortawesome/free-solid-svg-icons';
import { CoordinatesInteractionService } from '../coordinates-interaction.service';

import { trigger, style, animate, transition } from '@angular/animations';

interface Tracking {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-new-asset6-solar',
  templateUrl: './new-asset6-solar.component.html',
  styleUrls: ['./new-asset6-solar.component.css'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ height: 0, opacity: 0 }),
            animate('1s ease-out', 
                    style({ height: 80, opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ height: 80, opacity: 1 }),
            animate('1s ease-in', 
                    style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class NewAsset6SolarComponent implements OnInit {

  constructor(
    private _coordinatesInteraction: CoordinatesInteractionService,
    private fb: FormBuilder
    ) { }

  faMapMarkerAlt = faMapMarkerAlt;
  faCalendarWeek = faCalendarWeek;
  faClock = faClock;
  faFile = faFile;
  isGoogleMapsShown: boolean = false; //initialize it to false - not to be shown in the loading of the page

  solarForm = this.fb.group({
    solarLocation: [''],
    tilt: [''],
    azimuth: [''],
    tracking: [''],
    module: [''],
    temp_parameters: [''],
    money_per_kWh: [''],
    installed_capacity_kWp: [''],
    Temperatures: [''],
    Wind_speed: [''],
    Radiation: ['']
  });
  
  @ViewChild('solarLocation') solarLocation: ElementRef;
  @ViewChild('tilt') tilt: ElementRef;
  @ViewChild('azimuth') azimuth: ElementRef;
  @ViewChild('tracking') tracking: ElementRef;
  @ViewChild('module') module: ElementRef;
  @ViewChild('temp_parameters') temp_parameters: ElementRef;
  @ViewChild('money_per_kWh') money_per_kWh: ElementRef;
  @ViewChild('installed_capacity_kWp') installed_capacity_kWp: ElementRef;
  @ViewChild('Temperatures') Temperatures: ElementRef;
  @ViewChild('Wind_speed') Wind_speed: ElementRef;
  @ViewChild('Radiation') Radiation: ElementRef;

  description = GlobalConstants.assetDescription;
  question = GlobalConstants.assetQuestion;
  answer = GlobalConstants.assetAnswer;
  
  ngOnInit(): void {
    this._coordinatesInteraction.coordsMessage$.subscribe(
      message => {
        //alert(message);
        this.solarLocation.nativeElement.value = message;
        this.isGoogleMapsShown = ! this.isGoogleMapsShown;
      }
    )
  }

  isShown: boolean = false ; // hidden by default
  toggleShow() {
    this.isShown = ! this.isShown;    
  }

  btnClickClear(){ 
    if (this.isShown)
    {
      console.log("Btn Clear clicked - Full"); 
      this.solarLocation.nativeElement.value = '';  
      this.tilt.nativeElement.value = '';  
      this.azimuth.nativeElement.value = '';  
      this.tracking.nativeElement.value = '';  
      this.module.nativeElement.value = '';  
      this.temp_parameters.nativeElement.value = '';  
      this.money_per_kWh.nativeElement.value = '';  
      this.installed_capacity_kWp.nativeElement.value = '';   
      this.Temperatures.nativeElement.value = '';  
      this.Wind_speed.nativeElement.value = '';  
      this.Radiation.nativeElement.value = '';
    }
    else
    {
      console.log("Btn Clear clicked - Short"); 
      this.tilt.nativeElement.value = '';  
      this.azimuth.nativeElement.value = '';  
      this.tracking.nativeElement.value = '';   
      this.installed_capacity_kWp.nativeElement.value = '';   
      this.Temperatures.nativeElement.value = '';  
      this.Wind_speed.nativeElement.value = '';  
      this.Radiation.nativeElement.value = '';
    }
      
  }

  btnClickAddAsset(){
    console.log("Btn Add Asset clicked");
    //this.router.navigateByUrl('/newprojectadd');
  }

  googleMapsShow() {
    console.log("Btn isGoogleMapsShown clicked: " + this.isGoogleMapsShown);
    this.isGoogleMapsShown = ! this.isGoogleMapsShown;
  }

  trackings: Tracking[] = [
    {value: 'true', viewValue: 'True'},
    {value: 'false', viewValue: 'False'}
  ];
}
