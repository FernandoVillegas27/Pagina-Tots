
import { InputColumnComponent } from "../columns/input-column/input-column.component";
import { FormGroup } from "@angular/forms";
import { MatFormFieldAppearance } from "@angular/material/form-field";
import { TotsValidator } from "../entities/tots-validator";
import { TotsColumn } from "tots/table/src/lib/entities/tots-column";

export class TotsInputColumn extends TotsColumn {
	constructor(id:string, fieldKey:string|string[], validators?:TotsValidator[], title?:string, formGroup?:FormGroup, label?:string, placeholder?:string, hint?:string, cssClass?:string, appearance?:MatFormFieldAppearance) {
        super(id, InputColumnComponent, fieldKey, title);
        this.extra = {
            group: formGroup,
            validators: validators?.map(v=> v.validator),
            errors: validators?.map(v=> {return {name:v.name, message:v.message}}),
            label: label,
            class: cssClass,
            placeholder: placeholder,
            caption: hint,
            appearance: appearance
        }
    }
}