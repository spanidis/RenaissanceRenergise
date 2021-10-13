import { Component, OnInit } from '@angular/core';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { ViewChild, ElementRef } from '@angular/core';
import { GlobalConstants } from '../common/global-constants';

@Component({
  selector: 'app-new-asset5-building',
  templateUrl: './new-asset5-building.component.html',
  styleUrls: ['./new-asset5-building.component.css']
})
export class NewAsset5BuildingComponent implements OnInit {

  constructor() { }
  faFile = faFile;
  
  description = GlobalConstants.assetDescription;
  question = GlobalConstants.assetQuestion;
  answer = GlobalConstants.assetAnswer;
  
  ngOnInit(): void {
  }

  isShown: boolean = false ; // hidden by default
  toggleShow() {
    this.isShown = ! this.isShown;    
  }

  btnClickClear(){
    console.log("Btn Clear clicked");  
  }

  btnClickAddAsset(){
    console.log("Btn Add Asset clicked");
    //this.router.navigateByUrl('/newprojectadd');
  }
}
