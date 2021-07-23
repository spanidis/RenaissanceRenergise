import { Component, OnInit } from '@angular/core';
import { faSave } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-adding-config-files',
  templateUrl: './adding-config-files.component.html',
  styleUrls: ['./adding-config-files.component.css']
})
export class AddingConfigFilesComponent implements OnInit {

  constructor() { }

  faSave = faSave;

  ngOnInit(): void {
  }

  btnClickCancel(){
    console.log("Btn Cancel clicked");
    //this.router.navigateByUrl('/signup');
  }

  btnClickSubmit(){
    console.log("Btn Submit clicked");
    //this.router.navigateByUrl('/newprojectadd');
  }
}
