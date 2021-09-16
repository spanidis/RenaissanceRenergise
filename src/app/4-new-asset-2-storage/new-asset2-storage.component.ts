import { Component, OnInit } from '@angular/core';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-new-asset2-storage',
  templateUrl: './new-asset2-storage.component.html',
  styleUrls: ['./new-asset2-storage.component.css']
})
export class NewAsset2StorageComponent implements OnInit {

  constructor() { }

  faFile = faFile;

  @ViewChild('size') size: ElementRef;
  @ViewChild('soc') soc: ElementRef;
  @ViewChild('soc_min') soc_min: ElementRef;
  @ViewChild('soc_max') soc_max: ElementRef;
  @ViewChild('charge_eff') charge_eff: ElementRef;
  @ViewChild('disch_eff') disch_eff: ElementRef;
  @ViewChild('max_charge') max_charge: ElementRef;
  @ViewChild('power_profile') power_profile: ElementRef;
  
  ngOnInit(): void {
  }

  isShown: boolean = false ; // hidden by default
  toggleShow() {
    this.isShown = ! this.isShown;    
  }

  btnClickClear(){
    console.log("Btn Clear clicked");  
    this.size.nativeElement.value = '';
    this.soc.nativeElement.value = '';  
    this.soc_min.nativeElement.value = '';  
    this.soc_max.nativeElement.value = '';  
    this.charge_eff.nativeElement.value = '';  
    this.disch_eff.nativeElement.value = '';  
    this.max_charge.nativeElement.value = '';  
    this.power_profile.nativeElement.value = '';  
  }

  btnClickAddAsset(){
    console.log("Btn Add Asset clicked");
    //this.router.navigateByUrl('/newprojectadd');
  }
}
