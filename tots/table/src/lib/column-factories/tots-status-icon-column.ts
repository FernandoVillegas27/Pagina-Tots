import { StatusIconColumnComponent } from "../columns/status-icon-column/status-icon-column.component";
import { TotsColumn, TotsColumnOrder } from "../entities/tots-column";
import { TotsStatusIconColumnOption } from "../entities/tots-status-icon-column-option";

export class TotsStatusIconColumn extends TotsColumn {
	constructor(id:string, fieldKey:string|string[], options:TotsStatusIconColumnOption[], title?:string, hasOrder?:boolean, order?:TotsColumnOrder) {
        super(id, StatusIconColumnComponent, fieldKey, title, hasOrder, order);
        this.extra = {
            options: options,
            field_rel_key: "value",
            field_print_key: "caption"
        }
    }
}