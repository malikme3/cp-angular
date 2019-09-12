

import { Component, OnDestroy } from '@angular/core';
import { StatsBarData } from '../../../../@core/interfaces/ecommerce/stats-bar';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'ngx-stats-card-back',
  styleUrls: ['./stats-card-back.component.scss'],
  templateUrl: './stats-card-back.component.html',
})
export class StatsCardBackComponent implements OnDestroy {

  private alive = true;

  labels: any[];
  currency: string;
  chartData: number[];

  constructor(private statsBarData: StatsBarData) {
    this.statsBarData.getStatsBarData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((data) => {
        this.chartData = [].concat.apply([], data.linesData); // flatten array
        this.labels = data.aggregatedData;
        this.currency = data.chartLabel;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
