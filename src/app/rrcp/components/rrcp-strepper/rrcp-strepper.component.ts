import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { RrcpServicesService } from '../../services/rrcp-services.service';

@Component({
  selector: 'ngx-rrcp-strepper',
  templateUrl: './rrcp-strepper.component.html',
  styleUrls: ['./rrcp-strepper.component.scss'],
})
export class RrcpStrepperComponent implements OnInit {
  @Output() childEventCall = new EventEmitter<any>();
  fullStackContents: any[];

  constructor(private service: RrcpServicesService) {
    this.fullStackContents = service.fullStackContents;
  }

  ngOnInit() {
    this.childEventCall.next(this.fullStackContents);
  }

  callParent(index: number) {
    for (const [i, fwc] of this.fullStackContents.entries()) {
      if (index === i) {
        this.fullStackContents[i].expanded = true;
      } else {
        this.fullStackContents[i].expanded = false;
      }
      this.childEventCall.next(this.fullStackContents);
    }
  }
}
