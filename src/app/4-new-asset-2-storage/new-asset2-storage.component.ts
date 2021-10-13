import { Component, OnInit } from '@angular/core';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { ViewChild, ElementRef } from '@angular/core';
import { GlobalConstants } from '../common/global-constants';
import { VubApiService } from '../common/vub-api.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-asset2-storage',
  templateUrl: './new-asset2-storage.component.html',
  styleUrls: ['./new-asset2-storage.component.css']
})
export class NewAsset2StorageComponent implements OnInit {
  
  constructor(private fb: FormBuilder) { }
  private vubApi: VubApiService;
  private http: HttpClient

  faFile = faFile;

  @ViewChild('size') size: ElementRef;
  @ViewChild('soc') soc: ElementRef;
  @ViewChild('soc_min') soc_min: ElementRef;
  @ViewChild('soc_max') soc_max: ElementRef;
  @ViewChild('charge_eff') charge_eff: ElementRef;
  @ViewChild('disch_eff') disch_eff: ElementRef;
  @ViewChild('max_charge') max_charge: ElementRef;
  @ViewChild('power_profile') power_profile: ElementRef;
  
  description = GlobalConstants.assetDescription;
  question = GlobalConstants.assetQuestion;
  answer = GlobalConstants.assetAnswer;

  storageForm = this.fb.group({
    size: [''],
    soc: [''],
    soc_min: [''],
    soc_max: [''],
    charge_eff: [''],
    disch_eff: [''],
    max_charge: [''],
    power_profile: ['']
  });
  
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
    var battery_size = this.size.nativeElement.value;
    var battery_soc = this.soc.nativeElement.value;  
    var battery_soc_min = this.soc_min.nativeElement.value;  
    var battery_soc_max = this.soc_max.nativeElement.value;  
    var battery_charge_eff = this.charge_eff.nativeElement.value;  
    var battery_disch_eff = this.disch_eff.nativeElement.value;  
    var battery_max_charge = this.max_charge.nativeElement.value;  
    var battery_power_profile = this.power_profile.nativeElement.value;  

    console.log("battery_size: " + battery_size);
    console.log("battery_soc: " + battery_soc);
    console.log("battery_soc_min: " + battery_soc_min);
    console.log("battery_soc_max: " + battery_soc_max);
    console.log("battery_charge_eff: " + battery_charge_eff);
    console.log("battery_disch_eff: " + battery_disch_eff);
    console.log("battery_max_charge: " + battery_max_charge);
    console.log("battery_power_profile: " + battery_power_profile);

    var url = "https://renergisetool.evergi.be/users/";
    return this.http.get(url);
    //var serverName = this.commApi.getServerName;
    console.log("THE NAME OF THE SERVER IS: ");
    //call backend

  }

}
