import { StatusColumnComponent } from "../columns/status-column/status-column.component";
import { TotsColumn, TotsColumnOrder } from "../entities/tots-column";
import { TotsStatusColumnOption } from "../entities/tots-status-column-option";

export class TotsStatusColumn extends TotsColumn {
	constructor(id:string, fieldKey:string|string[], options:TotsStatusColumnOption[], title?:string, hasOrder?:boolean, order?:TotsColumnOrder) {
        super(id, StatusColumnComponent, fieldKey, title, hasOrder, order);
        this.extra = {
            options: options,
            field_rel_key: "value",
            field_print_key: "caption"
        }
    }
}