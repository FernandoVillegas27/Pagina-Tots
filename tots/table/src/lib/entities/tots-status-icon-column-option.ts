import { TotsColumnOption } from "./tots-column-option";

export class TotsStatusIconColumnOption extends TotsColumnOption {
    font_color: string;

    constructor(value:number|string, icon:string, fontColor:string) {
        super(value, icon);
        this.font_color = fontColor;
    }
}