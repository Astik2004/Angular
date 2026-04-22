import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing-module';
import { ProfileHome } from './profile-home/profile-home';
import { ProfileDetails } from './profile-details/profile-details';


@NgModule({
  declarations: [
    ProfileHome,
    ProfileDetails
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
