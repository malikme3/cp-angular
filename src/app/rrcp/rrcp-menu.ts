export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'home-outline',
    link: '/rrcp/home-page',
    // link: '/pages/dashboard',
    home: true,
  },
];

import { NbMenuItem } from '@nebular/theme';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class RRCpMenu {
  getMenu(): Observable<NbMenuItem[]> {
    const dashboardMenu: any[] = [
      {
        title: 'Home',
        icon: 'home-outline',
        link: '/rrcp/home-page',
        home: true,
        children: undefined,
      },
      {
        title: 'Why coding point?',
        icon: 'people-outline',
        link: '/pages/users/current',
        home: true,
        children: undefined,
      },

      {
        title: 'Career Help',
        icon: 'keypad-outline',
        link: '/rrcp/career-success',
        children: undefined,
      },
      {
        title: 'Auth',
        icon: 'lock-outline',
        children: [
          {
            title: 'Login',
            link: '/auth/login',
          },
          {
            title: 'Register',
            link: '/auth/register',
          },
          {
            title: 'Request Password',
            link: '/auth/request-password',
          },
          {
            title: 'Reset Password',
            link: '/auth/reset-password',
          },
          {
            title: 'Logout',
            link: '/auth/logout',
          },
        ],
      },
    ];

    return of([...dashboardMenu]);
  }
}
