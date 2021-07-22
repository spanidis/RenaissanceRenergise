import { Component, OnInit } from '@angular/core';

import { faMapMarkerAlt, faCalendarWeek, faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-adding-asset-general',
  templateUrl: './adding-asset-general.component.html',
  styleUrls: ['./adding-asset-general.component.css']
})
export class AddingAssetGeneralComponent implements OnInit {

  constructor() { }

  faMapMarkerAlt = faMapMarkerAlt;
  faCalendarWeek = faCalendarWeek;
  faClock = faClock;

  ngOnInit(): void {
  }

  btnClickClear(){
    console.log("Btn Clear clicked");
    //this.router.navigateByUrl('/signup');
  }

  btnClickSubmit(){
    console.log("Btn Submit clicked");
    //this.router.navigateByUrl('/newprojectadd');
  }
}
