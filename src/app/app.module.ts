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

import { LandingPageComponent } from './1-landing-page/landing-page.component';

import { LoginComponent } from './2-login/login.component';
import { SignupComponent } from './2-signup/signup.component';

import { NewprojectComponent } from './3-new-project/new-project.component';
import { NewprojectaddComponent } from './new-project-add/new-project-add.component';
import { UserMainMenuComponent } from './3-user-main-menu/user-main-menu.component';
import { MenuInputDataComponent } from './3-menu-input-data/menu-input-data.component';

import { AddingAssetGeneralComponent } from './4-general-information/general-information.component';
import { AddingDataFilesComponent } from './4-adding-data-files/adding-data-files.component';
import { AddingAssetNewComponent } from './4-new-asset-1-public-grid/4-new-asset-1-public-grid.component';
import { AddingConfigFilesComponent } from './4-adding-config-files/adding-config-files.component';
import { ModifyAssetComponent } from './4-modify-asset/modify-asset.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleMapsComponent } from './0-google-maps/google-maps.component';

import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    SocialmediaComponent,
    LoginComponent,
    SignupComponent,
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
    GoogleMapsComponent
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
