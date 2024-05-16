import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/** Angular Material */
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

/** Tots Libraries */

/** Columns */
import { InputColumnComponent } from './columns/input-column/input-column.component';

/** Components */
import { TotsTableFullGroupComponent } from './components/tots-table-full-group/tots-table-full-group.component';
import { TotsTableModule } from 'tots/table/src/lib/table.module';

@NgModule({
  declarations: [
    /** Columns */
    InputColumnComponent,

    /** Components */
    TotsTableFullGroupComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    /** Angular Material */
    MatFormFieldModule,
    MatInputModule,

    /** Tots Libraries */
    TotsTableModule,
  ],
  exports: [
    /** Columns */
    InputColumnComponent,

    /** Components */
    TotsTableFullGroupComponent,
  ],
})
export class TotsEditableColumnsModule {}
