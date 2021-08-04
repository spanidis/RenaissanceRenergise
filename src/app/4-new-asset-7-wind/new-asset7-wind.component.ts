import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-asset7-wind',
  templateUrl: './new-asset7-wind.component.html',
  styleUrls: ['./new-asset7-wind.component.css']
})
export class NewAsset7WindComponent implements OnInit {

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
