import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Angular Material */
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MAT_PAGINATOR_DEFAULT_OPTIONS, MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

/** Components */
import { TotsTableComponent } from './components/tots-table/tots-table.component';
import { TotsTableApiComponent } from './components/tots-table-api/tots-table-api.component';

/** Columns */
import { BasePrintColumnComponent } from './columns/base-print-column/base-print-column.component';
import { StringColumnComponent } from './columns/string-column/string-column.component';
import { MoreMenuColumnComponent } from './columns/more-menu-column/more-menu-column.component';
import { BooleanColumnComponent } from './columns/boolean-column/boolean-column.component';
import { TwoStringColumnComponent } from './columns/two-string-column/two-string-column.component';
import { IconButtonColumnComponent } from './columns/icon-button-column/icon-button-column.component';
import { CheckboxColumnComponent } from './columns/checkbox-column/checkbox-column.component';
import { OptionColumnComponent } from './columns/option-column/option-column.component';
import { UserColumnComponent } from './columns/user-column/user-column.component';
import { CurrencyColumnComponent } from './columns/currency-column/currency-column.component';
import { StatusColumnComponent } from './columns/status-column/status-column.component';
import { BalanceCurrencyColumnComponent } from './columns/balance-currency-column/balance-currency-column.component';
import { StatusIconColumnComponent } from './columns/status-icon-column/status-icon-column.component';
import { BalanceCurrencyIconColumnComponent } from './columns/balance-currency-icon-column/balance-currency-icon-column.component';
import { TOTS_TABLE_DEFAULT_CONFIG, TotsTableDefaultConfig } from './entities/tots-table-default-config';
import { LoadingAnimationRendererComponent } from './components/loading-animation-renderer/loading-animation-renderer.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    TotsTableComponent,
    BasePrintColumnComponent,
    StringColumnComponent,
    TotsTableApiComponent,
    MoreMenuColumnComponent,
    BooleanColumnComponent,
    TwoStringColumnComponent,
    IconButtonColumnComponent,
    CheckboxColumnComponent,
    OptionColumnComponent,
    UserColumnComponent,
    CurrencyColumnComponent,
    StatusColumnComponent,
    BalanceCurrencyColumnComponent,
    StatusIconColumnComponent,
    BalanceCurrencyIconColumnComponent,
    LoadingAnimationRendererComponent
  ],
  imports: [
    CommonModule,
    // Angular Material
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatMenuModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
  ],
  exports: [
    TotsTableComponent,
    TotsTableApiComponent
  ],
  providers: [
    {
			provide: MAT_PAGINATOR_DEFAULT_OPTIONS,
			useValue: {
				pageSizeOptions: [5, 10, 25, 50, 100]
			}
		},
    {
      provide: TOTS_TABLE_DEFAULT_CONFIG,
      useClass: TotsTableDefaultConfig
    }
  ]
})
export class TotsTableModule { }
