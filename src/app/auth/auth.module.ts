import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';
import {RegistrationComponent} from './registration/registration/registration.component';
import {LogInComponent} from './log-in/log-in/log-in.component';
import {ResetPasswordComponent} from './reset-password/reset-password/reset-password.component';
import {LogInContainer} from './log-in/log-in.container';
import {RegistrationContainer} from './registration/registration.container';
import {ResetPasswordContainer} from './reset-password/reset-password.container';
import {AuthWrapComponent} from './auth-wrap/auth-wrap.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule, MatToolbarModule} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatInputModule,
    SharedModule
  ],
  declarations: [
    RegistrationComponent,
    LogInComponent,
    RegistrationContainer,
    ResetPasswordComponent,
    LogInContainer,
    ResetPasswordContainer,
    AuthWrapComponent
  ]
})
export class AuthModule {
}
