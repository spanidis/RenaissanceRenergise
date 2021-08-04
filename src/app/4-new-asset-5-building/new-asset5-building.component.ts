import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-asset5-building',
  templateUrl: './new-asset5-building.component.html',
  styleUrls: ['./new-asset5-building.component.css']
})
export class NewAsset5BuildingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isShown: boolean = false ; // hidden by default
  toggleShow() {
    this.isShown = ! this.isShown;    
  }

  btnClickCancel(){
    console.log("Btn Cancel clicked");    
  }

  btnClickAddAsset(){
    console.log("Btn Add Asset clicked");
    //this.router.navigateByUrl('/newprojectadd');
  }
}
