import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SocialmediaComponent } from './../socialmedia/socialmedia.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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

}
