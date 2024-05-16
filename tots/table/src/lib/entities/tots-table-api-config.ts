import { TotsBaseHttpService, TotsQuery } from "@tots/core";
import { TotsColumn } from "./tots-column";

export class TotsTableApiConfig {
    id?: string = '';
    columns: Array<TotsColumn> = [];
    service!: TotsBaseHttpService<any>;
    query: TotsQuery = new TotsQuery();
    classes?: string = '';
}