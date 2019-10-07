import { Component, OnDestroy } from '@angular/core';

import { RRCpMenu } from './rrcp-menu';
import { NbMenuItem } from '@nebular/theme';
import { NbTokenService } from '@nebular/auth';
import { InitUserService } from '../@theme/services/init-user.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'rrcp-pages',
  styleUrls: ['rrcp.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class RRCpComponent implements OnDestroy {
  menu: NbMenuItem[];
  alive: boolean = true;

  constructor(
    private rrcpMenu: RRCpMenu,
    private tokenService: NbTokenService,
    protected initUserService: InitUserService,
  ) {
    this.initMenu();

    this.tokenService
      .tokenChange()
      .pipe(takeWhile(() => this.alive))
      .subscribe(() => {
        this.initMenu();
      });
  }

  initMenu() {
    this.rrcpMenu
      .getMenu()
      .pipe(takeWhile(() => this.alive))
      .subscribe(menu => {
        this.menu = menu;
      });
  }

  ngOnDestroy(): void {
    this.alive = false;
  }
}
