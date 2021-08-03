import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private router: Router) { }
  
  ngOnInit(): void {
  }

  btnClickSignUp(){
    console.log("Btn SignUp clicked");
    this.router.navigateByUrl('/signup')
  }

  btnClickLogIn(){
    console.log("Btn LogIn clicked");
    this.router.navigateByUrl('/login')
  }

  btnDemo(){
    console.log("Btn Demo clicked");
    this.router.navigateByUrl('/demo')
  }

}
