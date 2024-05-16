import { Component } from '@angular/core';
import { TotsBaseColumnComponent } from '../tots-base-column.component';
import { TotsTableHelper } from '../../helpers/tots-table-helper';

@Component({
  selector: 'tots-string-column',
  templateUrl: './string-column.component.html',
  styleUrls: ['./string-column.component.css']
})
export class StringColumnComponent extends TotsBaseColumnComponent {

  override getItemValue(): any {
    let value = TotsTableHelper.getItemValueByKey(this.item, this.column.field_key);

    if(this.column.extra && this.column.extra.cutSeparator){
      return value.split(this.column.extra.cutSeparator)[0];
    }

    return value;
  }

  protected get prepend() : string|undefined {
    return this.column.extra?.prepend;
  }
}
