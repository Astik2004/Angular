import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileHome } from './profile-home/profile-home';
import { ProfileDetails } from './profile-details/profile-details';

const routes: Routes = [
  { path: '', component: ProfileHome},
  {path:'details',component: ProfileDetails}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
