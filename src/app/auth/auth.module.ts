import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthRoutingModule} from './auth-routing.module';
import {RegistrationComponent} from './registration/registration/registration.component';
import {LogInComponent} from './log-in/log-in/log-in.component';
import {ResetPasswordComponent} from './reset-password/reset-password/reset-password.component';
import {LogInContainer} from './log-in/log-in.container';
import {RegistrationContainer} from './registration/registration.container';
import {ResetPasswordContainer} from './reset-password/reset-password.container';
import {AuthWrapComponent} from './auth-wrap/auth-wrap/auth-wrap.component';
import {AuthWrapContainer} from './auth-wrap/auth-wrap.container';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    FormsModule,
  ],
  declarations: [
    RegistrationComponent,
    LogInComponent,
    RegistrationContainer,
    ResetPasswordComponent,
    LogInContainer,
    ResetPasswordContainer,
    AuthWrapComponent,
    AuthWrapContainer
  ]
})
export class AuthModule {
}
