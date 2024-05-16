import { CurrencyColumnComponent } from "../columns/currency-column/currency-column.component";
import { TotsColumn, TotsColumnOrder } from "../entities/tots-column";

export class TotsCurrencyColumn extends TotsColumn {
	constructor(id:string, fieldKey:string|string[], title?:string, hasOrder?:boolean, order?:TotsColumnOrder) {
        super(id, CurrencyColumnComponent, fieldKey, title, hasOrder, order);
    }
}