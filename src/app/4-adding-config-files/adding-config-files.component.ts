import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adding-config-files',
  templateUrl: './adding-config-files.component.html',
  styleUrls: ['./adding-config-files.component.css']
})
export class AddingConfigFilesComponent implements OnInit {

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
