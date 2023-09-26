import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountPageComponent } from './account-page/account-page.component';
import { AccountRegisterComponent } from './account-register/account-register.component';
import { PasswordResetComponent } from './password-reset/password-reset.component'

const routes: Routes = [
  { path: 'profile', component: AccountPageComponent },
  { path: 'recover-password', component: AccountRegisterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
