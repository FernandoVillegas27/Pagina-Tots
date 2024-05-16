import { Component } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
// import { TotsBaseFieldComponent, TotsFieldForm } from '@tots/form';
import moment from 'moment';
import { TotsFieldForm } from 'projects/tots/form/src/lib/entities/tots-field-form';
import { TotsBaseFieldComponent } from 'projects/tots/form/src/lib/fields/tots-base-field.component';

@Component({
  selector: 'tots-datepicker-field',
  templateUrl: './datepicker-field.component.html',
  styleUrls: ['./datepicker-field.component.css']
})
export class DatepickerFieldComponent extends TotsBaseFieldComponent {

  getCaption() {
    if(this.field.extra && this.field.extra.caption){ return this.field.extra.caption; }
    return '';
  }

  getMinDate() {
    if(this.field.extra && this.field.extra.minDate){ return this.field.extra.minDate; }
    return null;
  }

  static override updateFormByItem(group: UntypedFormGroup, item: any, field: TotsFieldForm) {
    if(Array.isArray(field.key)){
    } else {
      if(item[field.key] != undefined){
        group.get(field.key)?.setValue(moment(item[field.key], field.extra?.format_input ?? 'YYYY-MM-DD HH:mm:ss'));
      }
    }
  }

  static override updateItemByForm(group: UntypedFormGroup, item: any, field: TotsFieldForm) {
    if(Array.isArray(field.key)){
    } else {
      if(group.get(field.key)?.value != undefined){
        item[field.key] = group.get(field.key)?.value.format(field.extra?.format_output ?? 'YYYY-MM-DD HH:mm:ss');
      }
    }
  }
}
