import { Component, OnInit } from '@angular/core';
import { faSave } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-adding-data-files',
  templateUrl: './adding-data-files.component.html',
  styleUrls: ['./adding-data-files.component.css']
})
export class AddingDataFilesComponent implements OnInit {

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
