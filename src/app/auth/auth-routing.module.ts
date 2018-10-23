import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LogInContainer} from './log-in/log-in.container';
import {AuthWrapComponent} from './auth-wrap/auth-wrap.component';
import {RegistrationContainer} from './registration/registration.container';
import {ResetPasswordContainer} from './reset-password/reset-password.container';


export const authRoutes: Routes = [
  {
    path: '', component: AuthWrapComponent, children: [
      {path: '', redirectTo: 'registration', pathMatch: 'full'},
      {path: 'registration', component: RegistrationContainer},
      {path: 'log-in', component: LogInContainer},
      {path: 'reset-password', component: ResetPasswordContainer},
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AuthRoutingModule {
}
