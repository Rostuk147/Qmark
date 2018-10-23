import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: './auth/auth.module#AuthModule'}
];
export const AppRoutes = RouterModule.forRoot(routes, {initialNavigation: 'enabled', useHash: true});
