

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ngx-status-card',
  styleUrls: ['./status-card.component.scss'],
  template: `
    <nb-card (click)="onClick()" [ngClass]="{ off: !on }">
      <div class="net-work icon-container">
        <div class="icon status-{{ type }}">
          <ng-content></ng-content>
        </div>
      </div>

      <div class="net-work details">
        <div class="title h5">{{ title }}</div>
      </div>
    </nb-card>
  `,
})
export class StatusCardComponent {
  @Input() title: string;
  @Input() type: string;
  @Input() on = true;

  @Output() statusChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  onClick() {
    this.on = !this.on;
    this.statusChanged.emit(this.on);
  }
}
