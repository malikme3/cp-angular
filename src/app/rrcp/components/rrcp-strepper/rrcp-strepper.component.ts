import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RrcpServicesService } from '../../services/rrcp-services.service';

@Component({
  selector: 'ngx-rrcp-strepper',
  templateUrl: './rrcp-strepper.component.html',
  styleUrls: ['./rrcp-strepper.component.scss'],
})
export class RrcpStrepperComponent implements OnInit {
  @Output() childEventCall = new EventEmitter<any>();
  fullStackContents: any[];

  constructor(service: RrcpServicesService) {
    this.fullStackContents = service.fullStackContents;
  }

  ngOnInit() {
    this.childEventCall.next(this.fullStackContents);
  }

  callParent(index: number) {
    for (const [i] of this.fullStackContents.entries()) {
      if (index === i) {
        this.fullStackContents[i].expanded = true;
      } else {
        this.fullStackContents[i].expanded = false;
      }
      this.childEventCall.next(this.fullStackContents);
    }
  }
}
