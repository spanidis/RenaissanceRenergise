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

import { AddingDataFilesComponent } from './4-adding-data-files/adding-data-files.component';
import { AddingConfigFilesComponent } from './4-adding-config-files/adding-config-files.component';
import { AddingAssetGeneralComponent } from './4-general-information/general-information.component';
import { ModifyAssetComponent } from './4-modify-asset/modify-asset.component';

import { FaqComponent } from './0-faq/faq.component';
import { AboutComponent } from './0-about/about.component';

import { AddingAssetNewComponent } from './4-new-asset-1-public-grid/4-new-asset-1-public-grid.component';
import { NewAsset2StorageComponent } from './4-new-asset-2-storage/new-asset2-storage.component';
import { NewAsset3GeneratorComponent } from './4-new-asset-3-generator/new-asset3-generator.component';
import { NewAsset4ChargerComponent } from './4-new-asset-4-charger/new-asset4-charger.component';
import { NewAsset5BuildingComponent } from './4-new-asset-5-building/new-asset5-building.component';
import { NewAsset6SolarComponent } from './4-new-asset-6-solar/new-asset6-solar.component';
import { NewAsset7WindComponent } from './4-new-asset-7-wind/new-asset7-wind.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'myprofile', component: ProfileComponent},
  
  { path: 'newproject', component: NewprojectComponent},
  { path: 'newprojectadd', component: NewprojectaddComponent},
  { path: 'myprojects', component: MyprojectsComponent},

  { path: 'tabgeneral', component: AddingAssetGeneralComponent},
  { path: 'tabimpdatafile', component: AddingDataFilesComponent},
  { path: 'tabimpconfigfile', component: AddingConfigFilesComponent},
  { path: 'tabmodify', component: ModifyAssetComponent},

  { path: 'privacypolicy', component: PrivacyPolicyComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'demo', component: DemoToolComponent},
  { path: 'about', component: AboutComponent},

  { path: 'tabnew', component: AddingAssetNewComponent},
  { path: 'tabstorage', component: NewAsset2StorageComponent},
  { path: 'tabgenerator', component: NewAsset3GeneratorComponent},
  { path: 'tabcharger', component: NewAsset4ChargerComponent},
  { path: 'tabbuilding', component: NewAsset5BuildingComponent},
  { path: 'tabsolar', component: NewAsset6SolarComponent},
  { path: 'tabwind', component: NewAsset7WindComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
