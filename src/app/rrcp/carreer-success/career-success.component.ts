import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { Device, DevicesData } from '../../@core/interfaces/iot/devices';
import { SolarEnergyStatistics, SolarData } from '../../@core/interfaces/iot/solar';
import { NbSidebarService } from '@nebular/theme';
import { LayoutService } from '../../@core/utils';
@Component({
  selector: 'rrcp-career-success',
  styleUrls: ['./career-success.component.scss'],
  templateUrl: './career-success.component.html',
})
export class CareerSuccessComponent implements OnDestroy, OnInit {
  private alive = true;

  solarValue: SolarEnergyStatistics;

  devices: Device[];

  constructor(
    private devicesService: DevicesData,
    private solarService: SolarData,
    private sidebarService: NbSidebarService,
    private layoutService: LayoutService,
  ) {
    this.devicesService
      .servicesList()
      .pipe(takeWhile(() => this.alive))
      .subscribe(data => {
        this.devices = data.filter(x => x.settings);
      });

    this.solarService
      .getSolarData()
      .pipe(takeWhile(() => this.alive))
      .subscribe(data => {
        this.solarValue = data;
      });
  }

  ngOnInit() {
    // close menu auto
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();
  }

  changeDeviceStatus(device: Device, isOn: boolean) {
    device.isOn = isOn;
    this.devicesService
      .edit(device)
      .pipe(takeWhile(() => this.alive))
      .subscribe();
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
