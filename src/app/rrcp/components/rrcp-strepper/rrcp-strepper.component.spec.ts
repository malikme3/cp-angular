import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RrcpStrepperComponent } from './rrcp-strepper.component';

describe('RrcpStrepperComponent', () => {
  let component: RrcpStrepperComponent;
  let fixture: ComponentFixture<RrcpStrepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RrcpStrepperComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RrcpStrepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
