import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  // {path: 'sign-in', loadChildren: './modules/auth/auth.module#AuthModule'},
  {path: '', loadChildren: './auth/auth.module#AuthModule'}
];
export const AppRoutes = RouterModule.forRoot(routes, {initialNavigation: 'enabled', useHash: true});
