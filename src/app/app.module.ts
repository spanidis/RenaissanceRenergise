import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { NewprojectComponent } from './newproject/newproject.component';
import { NewprojectaddComponent } from './newprojectadd/newprojectadd.component';
import { AddingAssetGeneralComponent } from './adding-asset-general/adding-asset-general.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

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
    PrivacyPolicyComponent
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
