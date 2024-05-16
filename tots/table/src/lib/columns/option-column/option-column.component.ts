import { Component } from '@angular/core';
import { TotsTableHelper } from '../../helpers/tots-table-helper';
import { TotsBaseColumnComponent } from '../tots-base-column.component';

@Component({
  selector: 'tots-option-column',
  templateUrl: './option-column.component.html',
  styleUrls: ['./option-column.component.css']
})
export class OptionColumnComponent extends TotsBaseColumnComponent {

  override getItemValue(): any {
    let value = TotsTableHelper.getItemValueByKey(this.item, this.column.field_key);
    for (const item of this.column.extra.options) {
      if(item[this.column.extra.field_rel_key] == value){
        return item[this.column.extra.field_print_key];
      }
    }
    return '';
  }

}
