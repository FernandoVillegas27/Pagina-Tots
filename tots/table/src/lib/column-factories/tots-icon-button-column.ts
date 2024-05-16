import { ThemePalette } from "@angular/material/core";
import { IconButtonColumnComponent } from "../columns/icon-button-column/icon-button-column.component";
import { TotsColumn } from "../entities/tots-column";

export class TotsIconButtonColumn extends TotsColumn {
	constructor(id:string, icon:string, action:string, color?:ThemePalette, title?:string, cssClass?:string, stickyEnd?:boolean) {
        super(id, IconButtonColumnComponent, undefined, title);
        this.extra = {
            icon: icon,
            matColor: color,
            action: action,
            class: cssClass,
            stickyEnd: stickyEnd
        }
    }
}