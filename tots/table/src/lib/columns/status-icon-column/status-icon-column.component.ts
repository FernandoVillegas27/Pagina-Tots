import { Component } from '@angular/core';
import { OptionColumnComponent } from '../option-column/option-column.component';
import { TotsTableHelper } from '../../helpers/tots-table-helper';

@Component({
  selector: 'tots-status-icon-column',
  templateUrl: './status-icon-column.component.html',
  styleUrls: ['./status-icon-column.component.css']
})
export class StatusIconColumnComponent extends OptionColumnComponent {

  getFontColor(): string {
    let value = TotsTableHelper.getItemValueByKey(this.item, this.column.field_key);
    for (const item of this.column.extra.options) {
      if(item[this.column.extra.field_rel_key] == value && item['font_color'] != undefined){
        return item['font_color'];
      }
    }
    return '';
  }
}
