import { UserColumnComponent } from "../columns/user-column/user-column.component";
import { TotsColumn, TotsColumnOrder } from "../entities/tots-column";

export class TotsUserColumn extends TotsColumn {
    // first name, last name y photo obligatorios. Si no hay variable de foto, que usen two string column
	constructor(id:string, firstNameFieldKey:string|string[], lastNameFieldKey:string|string[], photoFieldKey:string|string[], secondLineFieldKey?:string|string[], title?:string, onlineFieldKey?:string, hasOrder?:boolean, order?:TotsColumnOrder) {
        super(id, UserColumnComponent, undefined, title, hasOrder, order);
        this.extra = {
            field_firstname_key: firstNameFieldKey,
            field_lastname_key: lastNameFieldKey,
            field_photo_key: photoFieldKey,
            field_subtitle_key: secondLineFieldKey,
            field_online_key: onlineFieldKey
        }
    }
}