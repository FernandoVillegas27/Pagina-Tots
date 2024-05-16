import { MoreMenuColumnComponent } from "../columns/more-menu-column/more-menu-column.component";
import { TotsColumn } from "../entities/tots-column";
import { TotsMoreMenuItem } from "../entities/tots-more-menu-item";

export class TotsMoreMenuColumn extends TotsColumn {
	constructor(id:string, items:TotsMoreMenuItem[], title?:string, stickyEnd?:boolean) {
        super(id, MoreMenuColumnComponent, undefined, title);
        this.extra = {
            stickyEnd: stickyEnd,
            actions: items
        }
    }
}