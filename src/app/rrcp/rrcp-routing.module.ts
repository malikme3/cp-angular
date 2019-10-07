import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { RRCpComponent } from './rrcp.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CareerSuccessComponent } from './carreer-success/career-success.component';

const routes: Routes = [
  {
    path: '',
    component: RRCpComponent,
    children: [
      {
        path: 'home-page',
        component: HomePageComponent,
      },
      {
        path: 'career-success',
        component: CareerSuccessComponent,
      },
      {
        path: 'users',
        loadChildren: () => import('../pages/users/users.module').then(m => m.UsersModule),
      },

      {
        path: '**',
        component: HomePageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
