import { Component } from '@angular/core';
import { TotsBaseColumnComponent } from '../tots-base-column.component';
import { TotsTableHelper } from '../../helpers/tots-table-helper';

@Component({
  selector: 'tots-balance-currency-column',
  templateUrl: './balance-currency-column.component.html',
  styleUrls: ['./balance-currency-column.component.css']
})
export class BalanceCurrencyColumnComponent extends TotsBaseColumnComponent {

  getBalance() {
    return this.getDebit() - this.getCredit();
  }

  getDebit(): any {
    return TotsTableHelper.getItemValueByKey(this.item, this.column.extra.field_key_debit);
  }

  getCredit(): any {
    return TotsTableHelper.getItemValueByKey(this.item, this.column.extra.field_key_credit);
  }
}
