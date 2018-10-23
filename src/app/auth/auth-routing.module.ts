import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthWrapContainer} from './auth-wrap/auth-wrap.container';
import {LogInContainer} from './log-in/log-in.container';


export const authRoutes: Routes = [
  {
    path: '', component: AuthWrapContainer, children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LogInContainer},
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
