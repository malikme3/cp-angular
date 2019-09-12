

import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { Device, DevicesData } from '../../interfaces/iot/devices';

@Injectable()
export class DevicesService extends DevicesData {
  private data: Device[] = [
    {
      id: 1,
      name: 'Light',
      isOn: true,
      type: 'Light',
      settings: {
        iconClass: 'nb-lightbulb',
        type: 'primary',
      },
    },
    {
      id: 2,
      name: 'Roller Shades',
      isOn: true,
      type: 'RollerShades',
      settings: {
        iconClass: 'nb-roller-shades',
        type: 'success',
      },
    },
    {
      id: 3,
      name: 'Wireless Audio',
      isOn: true,
      type: 'WirelessAudio',
      settings: {
        iconClass: 'nb-checkmark-circle',
        type: 'info',
      },
    },
    {
      id: 4,
      name: 'Coffee Maker',
      isOn: true,
      type: 'CoffeeMaker',
      settings: {
        iconClass: 'nb-coffee-maker',
        type: 'warning',
      },
    },
  ];

  private services: Device[] = [
    {
      id: 1,
      name: 'Job Placement',
      isOn: true,
      type: 'Light',
      settings: {
        iconClass: 'job',
        type: 'primary',
      },
    },
    {
      id: 2,
      name: 'Resume Help',
      isOn: true,
      type: 'RollerShades',
      settings: {
        iconClass: 'resume',
        type: 'success',
      },
    },
    {
      id: 3,
      name: 'Interview Prep',
      isOn: true,
      type: 'WirelessAudio',
      settings: {
        iconClass: 'interview',
        type: 'warning',
      },
    },
    {
      id: 4,
      name: 'Networking',
      isOn: true,
      type: 'CoffeeMaker',
      settings: {
        iconClass: 'net-work',
        type: 'warning',
      },
    },
  ];

  list(): Observable<Device[]> {
    return observableOf(this.data);
  }

  servicesList(): Observable<Device[]> {
    return observableOf(this.services);
  }

  edit(device: Device): Observable<Device> {
    return observableOf(device);
  }
}
