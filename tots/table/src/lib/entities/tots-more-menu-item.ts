export class TotsMoreMenuItem {
    icon: string|undefined;
    title: string;
    key: string;
    class?: string;

    constructor(icon:string|undefined, caption:string, action:string, cssClass?:string) {
        this.icon = icon;
        this.title = caption;
        this.key = action;
        this.class = cssClass;
    }
}