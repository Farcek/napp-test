import { ClassMeta } from "../metadata";
import { $inputmetaKey, Inputmeta } from "./input.meta";
import { Inputtype } from "./inputtype";




export interface IBooleanInput {

}
export function BooleanInput(option?: IBooleanInput) {
    return (target: Object, property: string) => {
        let p = ClassMeta.Factory(target.constructor).factoryProperty(property);
        let meta: Inputmeta = {
            inputtype: Inputtype.boolean,
            options: option
        }
        p.setMeta($inputmetaKey, meta);
    }
}
