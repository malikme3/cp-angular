import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'rrcp-home-page',
  styleUrls: ['./home-page.component.scss'],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnDestroy {
  fullStackInfo: any[];

  constructor() {}

  ngOnDestroy() {}

  getFullStackContent(contents: any[]) {
    this.fullStackInfo = contents;
  }
}
