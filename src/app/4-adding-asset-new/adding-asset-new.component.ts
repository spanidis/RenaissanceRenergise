import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adding-asset-new',
  templateUrl: './adding-asset-new.component.html',
  styleUrls: ['./adding-asset-new.component.css']
})
export class AddingAssetNewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  btnClickCancel(){
    console.log("Btn Cancel clicked");
    //this.router.navigateByUrl('/signup');
  }

  btnClickAddAsset(){
    console.log("Btn Add Asset clicked");
    //this.router.navigateByUrl('/newprojectadd');
  }
}
