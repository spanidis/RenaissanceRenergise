import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo-tool',
  templateUrl: './demo-tool.component.html',
  styleUrls: ['./demo-tool.component.css']
})
export class DemoToolComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
