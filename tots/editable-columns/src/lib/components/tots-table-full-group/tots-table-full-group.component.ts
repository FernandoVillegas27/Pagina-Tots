import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { TotsListResponse } from '@tots/core';
import { TotsTableComponent } from 'tots/table/src/lib/components/tots-table/tots-table.component';
import { TotsActionTable } from 'tots/table/src/lib/entities/tots-action-table';
import { TotsColumn } from 'tots/table/src/lib/entities/tots-column';
import { TotsTableConfig } from 'tots/table/src/lib/entities/tots-table-config';

// import { TotsActionTable, TotsColumn, TotsTableComponent, TotsTableConfig } from '@tots/table';

@Component({
  selector: 'tots-table-full-group',
  templateUrl: './tots-table-full-group.component.html',
  styleUrls: ['./tots-table-full-group.component.css']
})
export class TotsTableFullGroupComponent {

  @ViewChild('tableComp') protected tableComp!: TotsTableComponent;

  @Input() config = new TotsTableConfig();
  @Input() pageIndex: number = 0;
  @Input() pageSize: number = 50;
  @Input() hasPagination: boolean = true;
  @Input() messageNotFound: string = "No results found, please try with other search terms";

  @Output() onAction = new EventEmitter<TotsActionTable>();

  formArrayMain : FormArray<FormGroup> = new FormArray<FormGroup>([]);

  protected onTableAction(action: TotsActionTable) {
    if (action.key == 'input-create') {
      this.addInputInGroup(action.item.input, action.item.index, action.item.column);

    } else if (action.key == 'input-change') {
      this.onAction.emit(action);
      setTimeout(() => {
        this.emitFormChange();
      });

    } else if (action.key == "input-destroy" ) {
      this.removeInputFromGroup(action.item.index, action.item.field_key);
    }

    this.onAction.emit(action);
  }

  private addInputInGroup(input: FormControl, index: number, column: TotsColumn) {
    let group = this.formArrayMain.at(index);
    
    if (group) {
      group.addControl(this.getFormKey(column), input);
      this.formArrayMain.setControl(index, group);

    } else {
      group = new FormGroup({});
      group.addControl(this.getFormKey(column), input);
      this.formArrayMain.push(group);
      this.emitFormChange();
    }
    
  }
  private removeInputFromGroup(index: number, field_key: string) {
    let formGroup = this.formArrayMain.at(index);
    if (!formGroup)
      return

    formGroup.removeControl(field_key);

    let keys = Object.keys(formGroup.controls);

    if (keys.length == 0) {
      this.formArrayMain.removeAt(index);
      this.emitFormChange();
    }
  }

  private getFormKey(column: TotsColumn): string {
    if(Array.isArray(column.field_key)){
      return column.field_key.join('_');
    } else {
      return column.field_key!;
    }
  }

  loadItems() {
    this.tableComp?.loadItems();
  }

  private emitFormChange() {
    this.onAction.emit({ key: 'form-change', item: { valid: this.formArrayMain.valid, values: this.formArrayMain.value } });
  }
}
