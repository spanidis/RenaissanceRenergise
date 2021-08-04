import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-asset4-charger',
  templateUrl: './new-asset4-charger.component.html',
  styleUrls: ['./new-asset4-charger.component.css']
})
export class NewAsset4ChargerComponent implements OnInit {

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
