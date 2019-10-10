import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { LayoutService } from '../../@core/utils';

@Component({
  selector: 'rrcp-home-page',
  styleUrls: ['./home-page.component.scss'],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnDestroy, OnInit {
  fullStackInfo: any[];

  constructor(private sidebarService: NbSidebarService, private layoutService: LayoutService) {}

  ngOnInit() {
    // close menu auto
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();
  }

  ngOnDestroy() {}

  getFullStackContent(contents: any[]) {
    this.fullStackInfo = contents;
  }
}
