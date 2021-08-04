import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-asset6-solar',
  templateUrl: './new-asset6-solar.component.html',
  styleUrls: ['./new-asset6-solar.component.css']
})
export class NewAsset6SolarComponent implements OnInit {

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
