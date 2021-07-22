import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  btnClickBack(){
    console.log("Btn Back clicked");
    this.router.navigateByUrl('/signup');
  }

  btnClickSignupSave(){
    console.log("Btn SignupSave clicked");
    this.router.navigateByUrl('/newprojectadd');
  }
}
