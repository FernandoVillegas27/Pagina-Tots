import { TotsColumnOption } from "./tots-column-option";

export class TotsStatusColumnOption extends TotsColumnOption {
    background_color: string;
    font_color: string;

    constructor(value:number|string, caption:string, backgroundColor:string, fontColor:string) {
        super(value, caption);
        this.background_color = backgroundColor;
        this.font_color = fontColor;
    }
}