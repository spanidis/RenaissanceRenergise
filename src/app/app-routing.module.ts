import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { NewprojectComponent } from './newproject/newproject.component';
import { NewprojectaddComponent } from './newprojectadd/newprojectadd.component';
import { AddingAssetGeneralComponent } from './adding-asset-general/adding-asset-general.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'myprofile', component: ProfileComponent},
  { path: 'newproject', component: NewprojectComponent},
  { path: 'newprojectadd', component: NewprojectaddComponent},
  { path: 'tabgeneral', component: AddingAssetGeneralComponent},
  { path: 'privacypolicy', component: PrivacyPolicyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
