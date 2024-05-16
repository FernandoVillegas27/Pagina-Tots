import { StringColumnComponent } from "../columns/string-column/string-column.component";
import { TotsColumn, TotsColumnOrder } from "../entities/tots-column";

export class TotsStringColumn extends TotsColumn {
	constructor(id:string, fieldKey:string|string[], title?:string, hasOrder?:boolean, order?:TotsColumnOrder, prepend?:string) {
        super(id, StringColumnComponent, fieldKey, title, hasOrder, order);
        this.extra = {
            prepend: prepend
        }
    }
}