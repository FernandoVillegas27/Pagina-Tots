import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

/** Columns */
import { DateColumnComponent } from './columns/date-column/date-column.component';

@NgModule({
  declarations: [
    
    /** Columns */
    DateColumnComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    /** Columns */
    DateColumnComponent
  ]
})
export class TotsDateColumnModule { }
