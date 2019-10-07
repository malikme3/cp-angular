import { Component, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';
import { RrcpStrepperComponent } from '../components/rrcp-strepper/rrcp-strepper.component';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'rrcp-home-page',
  styleUrls: ['./home-page.component.scss'],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnDestroy {
  fullStackInfo: any[];

  constructor(private themeService: NbThemeService) {}

  ngOnDestroy() {}

  getFullStackContent(contents: any[]) {
    this.fullStackInfo = contents;
  }
}
