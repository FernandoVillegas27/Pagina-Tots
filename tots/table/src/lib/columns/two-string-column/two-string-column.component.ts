import { Component } from '@angular/core';
import { TotsTableHelper } from '../../helpers/tots-table-helper';
import { TotsBaseColumnComponent } from '../tots-base-column.component';

@Component({
  selector: 'tots-two-string-column',
  templateUrl: './two-string-column.component.html',
  styleUrls: ['./two-string-column.component.css']
})
export class TwoStringColumnComponent extends TotsBaseColumnComponent {

  getSubtitleValue(): any {
    return TotsTableHelper.getItemValueByKey(this.item, this.column.extra.field_subtitle_key);
  }
}
