import { ClassMeta } from "../metadata";
import { $inputmetaKey, Inputmeta } from "./input.meta";
import { Inputtype } from "./inputtype";

export interface IDateInput {

}
export function DateInput(option?: IDateInput) {
    return (target: object, property: string) => {
        let p = ClassMeta.Factory(target.constructor).factoryProperty(property);
        let meta: Inputmeta = {
            inputtype: Inputtype.date,
            options: option
        }
        p.setMeta($inputmetaKey, meta);
    };
}
