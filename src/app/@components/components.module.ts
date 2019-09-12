

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxValidationMessageComponent } from './validation-message/validation-message.component';

const COMPONENTS = [
  NgxValidationMessageComponent,
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
  ],
  exports: [...COMPONENTS],
  declarations: [...COMPONENTS],
})
export class ComponentsModule {
}
