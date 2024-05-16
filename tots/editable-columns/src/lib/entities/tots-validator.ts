import { ValidatorFn } from "@angular/forms"

export class TotsValidator {
    validator: ValidatorFn;
    name: string;
    message: string;
    
    constructor(validator:ValidatorFn, name:string, message:string) {
        this.validator = validator;
        this.name = name;
        this.message = message;
    }
}