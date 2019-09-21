import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from './@auth/auth.guard';

const routes: Routes = [
  //    remove app before path
  //  app/rrcp/rrcp.module -> ./rrcp/rrcp.module
  {
    path: 'rrcp',
    loadChildren: () => import('./rrcp/rrcp.module').then(m => m.RRCpModule),
  },
  {
    canActivate: [AuthGuard],
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./@auth/auth.module').then(m => m.AuthModule),
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
