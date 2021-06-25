import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  btnClickBack(){
    console.log("Btn Back clicked");
    this.router.navigateByUrl('/');
  }

  btnClickSignUp(){
    console.log("Btn Signup clicked");
    this.router.navigateByUrl('/myprofile');
  }
}
