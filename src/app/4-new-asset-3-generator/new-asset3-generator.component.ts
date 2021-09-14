import { Component, OnInit } from '@angular/core';

import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-new-asset3-generator',
  templateUrl: './new-asset3-generator.component.html',
  styleUrls: ['./new-asset3-generator.component.css'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ height: 0, opacity: 0 }),
            animate('2s ease-out', 
                    style({ height: 40, opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ height: 40, opacity: 1 }),
            animate('2s ease-in', 
                    style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class NewAsset3GeneratorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isShown: boolean = false ; // hidden by default
  toggleShow() {
    this.isShown = ! this.isShown;    
  }

  btnClickClear(){
    console.log("Btn Clear clicked");    
  }

  btnClickAddAsset(){
    console.log("Btn Add Asset clicked");
    //this.router.navigateByUrl('/newprojectadd');
  }
}
