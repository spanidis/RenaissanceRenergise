import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router) { }
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;

  ngOnInit(): void {
  }

}
