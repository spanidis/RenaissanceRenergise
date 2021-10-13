import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder) { }
  ngOnInit(): void {
  }

  faKey = faKey;
  faEnvelope = faEnvelope;
  isLoggedIn: boolean = true ; // hidden by default

  loginForm = this.fb.group({
    loginName: [''],
    loginPassword: ['']
  });

  btnClickBack(){
    console.log("Btn Back clicked");
    //this.router.navigateByUrl('/');
  }

  btnClickLogIn(){
    console.log("Btn LogIn clicked");
    console.warn(this.loginForm.value);
    console.log(this.loginForm.get("loginName").value);
    console.log(this.loginForm.get("loginPassword").value);
    
    var lgName = this.loginForm.get("loginPassword").value;
    var lgPass = this.loginForm.get("loginPassword").value;

    if(lgName == "test1" && lgPass == "test1")
    {
      this.router.navigateByUrl('/newproject');
    }
    else{
      console.log("Username or Password incorrect!");
      this.isLoggedIn = false; 
    }
  }

}
