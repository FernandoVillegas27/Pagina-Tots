import { AutoFocusTarget } from "@angular/material/dialog";
import { TotsBaseHttpService } from "@tots/core";
import { TotsModalConfig } from "projects/tots/form/src/lib/entities/tots-modal-config";
// import { TotsModalConfig } from "@tots/form";

export class TotsFormModalApiConfig extends TotsModalConfig {
    service?: TotsBaseHttpService<any>;
    autoFocus?: AutoFocusTarget|string|boolean;
}