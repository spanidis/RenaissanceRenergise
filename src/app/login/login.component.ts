import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit(): void {
  }

  faKey = faKey;
  faEnvelope = faEnvelope;

  btnClickBack(){
    console.log("Btn Back clicked");
    this.router.navigateByUrl('/');
  }

  btnClickLogIn(){
    console.log("Btn LogIn clicked");
    this.router.navigateByUrl('/newproject');
  }

}
