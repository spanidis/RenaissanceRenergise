import { Component, OnInit } from '@angular/core';

import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  
  ngOnInit(): void {
  }

  btnClickSignUp(){
    console.log("Btn SignUp clicked");
  }

  btnClickLogIn(){
    console.log("Btn LogIn clicked");
  }

}
