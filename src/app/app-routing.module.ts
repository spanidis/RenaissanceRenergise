import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrivacyPolicyComponent } from './0-privacy-policy/privacy-policy.component';
import { ProfileComponent } from './0-profile/profile.component';

import { SignupComponent } from './2-signup/signup.component';
import { LoginComponent } from './2-login/login.component';
import { DemoToolComponent } from './2-demo-tool/demo-tool.component';

import { NewprojectComponent } from './3-new-project/new-project.component';
import { MyprojectsComponent } from './3-myprojects/myprojects.component';
import { NewprojectaddComponent } from './3-new-project-add/new-project-add.component';

import { AddingAssetNewComponent } from './4-new-asset-1-public-grid/4-new-asset-1-public-grid.component';
import { AddingDataFilesComponent } from './4-adding-data-files/adding-data-files.component';
import { AddingConfigFilesComponent } from './4-adding-config-files/adding-config-files.component';
import { AddingAssetGeneralComponent } from './4-general-information/general-information.component';
import { ModifyAssetComponent } from './4-modify-asset/modify-asset.component';

import { FaqComponent } from './0-faq/faq.component';
import { AboutComponent } from './0-about/about.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'myprofile', component: ProfileComponent},
  
  { path: 'newproject', component: NewprojectComponent},
  { path: 'newprojectadd', component: NewprojectaddComponent},
  { path: 'myprojects', component: MyprojectsComponent},

  { path: 'tabgeneral', component: AddingAssetGeneralComponent},
  { path: 'tabnew', component: AddingAssetNewComponent},
  { path: 'tabimpdatafile', component: AddingDataFilesComponent},
  { path: 'tabimpconfigfile', component: AddingConfigFilesComponent},
  { path: 'tabmodify', component: ModifyAssetComponent},

  { path: 'privacypolicy', component: PrivacyPolicyComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'demo', component: DemoToolComponent},
  { path: 'about', component: AboutComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
