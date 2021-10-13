import { Component, OnInit } from '@angular/core';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { ViewChild, ElementRef } from '@angular/core';
import { GlobalConstants } from '../common/global-constants';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-asset4-charger',
  templateUrl: './new-asset4-charger.component.html',
  styleUrls: ['./new-asset4-charger.component.css']
})
export class NewAsset4ChargerComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  faFile = faFile;

  @ViewChild('efficiency') efficiency: ElementRef;
  @ViewChild('max_charge_cp') max_charge_cp: ElementRef;
  @ViewChild('max_discharge_cp') max_discharge_cp: ElementRef;
  @ViewChild('kind_cp') kind_cp: ElementRef;
  @ViewChild('energy') energy: ElementRef;
  @ViewChild('detention') detention: ElementRef;
  @ViewChild('P_max') P_max: ElementRef;
  @ViewChild('kind_session') kind_session: ElementRef;

  description = GlobalConstants.assetDescription;
  question = GlobalConstants.assetQuestion;
  answer = GlobalConstants.assetAnswer;

  chargerForm = this.fb.group({
    efficiency: [''],
    max_charge_cp: [''],
    max_discharge_cp: [''],
    kind_cp: [''],
    energy: [''],
    detention: [''],
    P_max: [''],
    kind_session: ['']
  });
  
  ngOnInit(): void {
  }

  isShown: boolean = false ; // hidden by default
  toggleShow() {
    this.isShown = ! this.isShown;    
  }

  btnClickClear(){
    console.log("Btn Clear clicked");  
    this.efficiency.nativeElement.value = '';  
    this.max_charge_cp.nativeElement.value = '';  
    this.max_discharge_cp.nativeElement.value = '';  
    this.kind_cp.nativeElement.value = '';  
    this.energy.nativeElement.value = '';  
    this.detention.nativeElement.value = '';  
    this.P_max.nativeElement.value = '';  
    this.kind_session.nativeElement.value = '';   
  }

  btnClickAddAsset(){
    console.log("Btn Add Asset clicked");
    //this.router.navigateByUrl('/newprojectadd');
  }
}
