import { TestBed } from '@angular/core/testing';

import { RrcpServicesService } from './rrcp-services.service';

describe('RrcpServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RrcpServicesService = TestBed.get(RrcpServicesService);
    expect(service).toBeTruthy();
  });
});
