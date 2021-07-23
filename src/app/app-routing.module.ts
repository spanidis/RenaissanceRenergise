import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrivacyPolicyComponent } from './0-privacy-policy/privacy-policy.component';
import { ProfileComponent } from './0-profile/profile.component';

import { SignupComponent } from './2-signup/signup.component';
import { LoginComponent } from './2-login/login.component';

import { NewprojectComponent } from './3-new-project/new-project.component';
import { NewprojectaddComponent } from './new-project-add/new-project-add.component';

import { AddingAssetNewComponent } from './4-adding-asset-new/adding-asset-new.component';
import { AddingDataFilesComponent } from './4-adding-data-files/adding-data-files.component';
import { AddingConfigFilesComponent } from './4-adding-config-files/adding-config-files.component';
import { AddingAssetGeneralComponent } from './4-general-information/general-information.component';
import { ModifyAssetComponent } from './4-modify-asset/modify-asset.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'myprofile', component: ProfileComponent},
  
  { path: 'newproject', component: NewprojectComponent},
  { path: 'newprojectadd', component: NewprojectaddComponent},

  { path: 'tabgeneral', component: AddingAssetGeneralComponent},
  { path: 'tabnew', component: AddingAssetNewComponent},
  { path: 'tabimpdatafile', component: AddingDataFilesComponent},
  { path: 'tabimpconfigfile', component: AddingConfigFilesComponent},
  { path: 'tabmodify', component: ModifyAssetComponent},

  { path: 'privacypolicy', component: PrivacyPolicyComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
