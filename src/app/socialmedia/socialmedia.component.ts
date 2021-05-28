import { Component, OnInit } from '@angular/core';

import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-socialmedia',
  templateUrl: './socialmedia.component.html',
  styleUrls: ['./socialmedia.component.css']
})
export class SocialmediaComponent implements OnInit {

  constructor() { }
  
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;

  ngOnInit(): void {
  }

}
