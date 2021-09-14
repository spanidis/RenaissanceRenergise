import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-asset2-storage',
  templateUrl: './new-asset2-storage.component.html',
  styleUrls: ['./new-asset2-storage.component.css']
})
export class NewAsset2StorageComponent implements OnInit {

  constructor() { }

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
