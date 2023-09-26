import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { AccountPageComponent } from './account-page/account-page.component';
import { AccountRegisterComponent } from './account-register/account-register.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProfileRoutingModule
  ],
  declarations: [AccountPageComponent, AccountRegisterComponent,PasswordResetComponent,ProfileDetailsComponent]
})
export class ProfileModule { }
