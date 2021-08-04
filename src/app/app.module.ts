import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE} from '@angular/material/core';
import { MatSlideToggleModule, MatSlideToggle} from '@angular/material/slide-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './0-footer/footer.component';
import { HeaderComponent } from './0-header/header.component';
import { LeftSideLogoComponent } from './0-left-side-logo/left-side-logo.component';
import { SocialmediaComponent } from './0-socialmedia/socialmedia.component';
import { ProfileComponent } from './0-profile/profile.component';
import { PrivacyPolicyComponent } from './0-privacy-policy/privacy-policy.component';
import { GoogleMapsComponent } from './0-google-maps/google-maps.component';

import { LandingPageComponent } from './1-landing-page/landing-page.component';

import { LoginComponent } from './2-login/login.component';
import { SignupComponent } from './2-signup/signup.component';
import { DemoToolComponent } from './2-demo-tool/demo-tool.component';

import { NewprojectComponent } from './3-new-project/new-project.component';
import { NewprojectaddComponent } from './3-new-project-add/new-project-add.component';
import { UserMainMenuComponent } from './3-user-main-menu/user-main-menu.component';
import { MenuInputDataComponent } from './3-menu-input-data/menu-input-data.component';
import { MyprojectsComponent } from './3-myprojects/myprojects.component';

import { AddingAssetGeneralComponent } from './4-general-information/general-information.component';
import { AddingDataFilesComponent } from './4-adding-data-files/adding-data-files.component';
import { AddingAssetNewComponent } from './4-new-asset-1-public-grid/4-new-asset-1-public-grid.component';
import { AddingConfigFilesComponent } from './4-adding-config-files/adding-config-files.component';
import { ModifyAssetComponent } from './4-modify-asset/modify-asset.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AgmCoreModule } from '@agm/core';
import { FaqComponent } from './0-faq/faq.component';
import { AboutComponent } from './0-about/about.component';
import { NewAsset2StorageComponent } from './4-new-asset-2-storage/new-asset2-storage.component';
import { NewAsset3GeneratorComponent } from './4-new-asset-3-generator/new-asset3-generator.component';
import { NewAsset4ChargerComponent } from './4-new-asset-4-charger/new-asset4-charger.component';
import { NewAsset5BuildingComponent } from './4-new-asset-5-building/new-asset5-building.component';
import { NewAsset6SolarComponent } from './4-new-asset-6-solar/new-asset6-solar.component';
import { NewAsset7WindComponent } from './4-new-asset-7-wind/new-asset7-wind.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    SocialmediaComponent,
    
    LoginComponent,
    SignupComponent,
    DemoToolComponent,
    
    ProfileComponent,
    NewprojectComponent,
    NewprojectaddComponent,
    AddingAssetGeneralComponent,
    PrivacyPolicyComponent,
    AddingAssetNewComponent,
    LeftSideLogoComponent,
    UserMainMenuComponent,
    AddingDataFilesComponent,
    AddingConfigFilesComponent,
    MenuInputDataComponent,
    ModifyAssetComponent,
    GoogleMapsComponent,
    FaqComponent,
    AboutComponent,
    MyprojectsComponent,
    NewAsset2StorageComponent,
    NewAsset3GeneratorComponent,
    NewAsset4ChargerComponent,
    NewAsset5BuildingComponent,
    NewAsset6SolarComponent,
    NewAsset7WindComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatDatepickerModule, 
    MatNativeDateModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCrDH8KL8G1nz2X6K6NS6-zGJVeklrUj_8',
      libraries: ['places']
    }),
    RouterModule.forRoot([
      {path: '', component: LandingPageComponent}
    ]),
    BrowserAnimationsModule
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'el-GR'},],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
