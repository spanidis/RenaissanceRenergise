import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-asset3-generator',
  templateUrl: './new-asset3-generator.component.html',
  styleUrls: ['./new-asset3-generator.component.css']
})
export class NewAsset3GeneratorComponent implements OnInit {

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
