import { Component, EventEmitter, Input, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { TotsActionTable } from "../entities/tots-action-table";
import { TotsColumn } from "../entities/tots-column";
import { TotsTableHelper } from "../helpers/tots-table-helper";

@Component({
    selector: 'tots-base-column',
    template: ''
})
export class TotsBaseColumnComponent{

    @Input() column!: TotsColumn;
    @Input() item: any;
    @Input() onAction!: Subject<TotsActionTable>;
    @Input() index?: number;

    getItemValue(): any {
        return TotsTableHelper.getItemValueByKey(this.item, this.column.field_key);
    }
}
