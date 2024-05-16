import { TotsListResponse, TotsQuery } from "@tots/core";
import { Observable } from "rxjs";
import { TotsColumn } from "./tots-column";

export class TotsTableConfig {
    id?: string = '';
    columns: Array<TotsColumn> = [];
    obs?: Observable<TotsListResponse<any>>;
    classes?: string = '';
}