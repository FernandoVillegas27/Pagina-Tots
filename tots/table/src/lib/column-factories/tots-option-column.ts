import { OptionColumnComponent } from "../columns/option-column/option-column.component";
import { TotsColumn, TotsColumnOrder } from "../entities/tots-column";
import { TotsColumnOption } from "../entities/tots-column-option";

export class TotsOptionColumn extends TotsColumn {
	constructor(id:string, fieldKey:string|string[], options:TotsColumnOption[], title?:string, hasOrder?:boolean, order?:TotsColumnOrder) {
        super(id, OptionColumnComponent, fieldKey, title, hasOrder, order);
        this.extra = {
            options: options,
            field_rel_key: "value",
            field_print_key: "caption"
        }
    }
}