// import { TotsFieldForm } from "@tots/form";

import { TotsFieldForm } from "projects/tots/form/src/lib/entities/tots-field-form";

export class TotsFormSidebarItem {
    key?: string;
    icon?: string;
    title: string = '';
    subtitle?: string;
    fields: Array<TotsFieldForm> = [];
    item: any;
    isSelected?: boolean = false;
    isLoading?: boolean = false;
}

export class TotsFormSidebarPageConfig {
    title: string = '';
    items: Array<TotsFormSidebarItem> = [];
}