

import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from './@auth/auth.guard';

const routes: Routes = [
  {
    canActivate: [AuthGuard],
    path: 'rrcp',
    loadChildren: () => import('app/rrcp/rrcp.module').then(m => m.RRCpModule),
  },
  {
    canActivate: [AuthGuard],
    path: 'pages',
    loadChildren: () => import('app/pages/pages.module').then(m => m.PagesModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('app/@auth/auth.module').then(m => m.AuthModule),
  },
  { path: '', redirectTo: 'rrcp', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
