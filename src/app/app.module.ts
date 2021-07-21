import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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

import { ContentComponent } from './content/content.component';

import { AddingAssetGeneralComponent } from './adding-asset-general/adding-asset-general.component';
import { AddingDataFilesComponent } from './adding-data-files/adding-data-files.component';
import { AddingAssetNewComponent } from './adding-asset-new/adding-asset-new.component';
import { AddingConfigFilesComponent } from './adding-config-files/adding-config-files.component';

import { NewprojectComponent } from './new-project/new-project.component';
import { NewprojectaddComponent } from './new-project-add/new-project-add.component';
import { UserMainMenuComponent } from './user-main-menu/user-main-menu.component';
import { MenuInputDataComponent } from './menu-input-data/menu-input-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
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
    MenuInputDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      {path: '', component: LandingPageComponent}
    ])
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
