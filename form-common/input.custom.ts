import { ClassMeta } from "../metadata";
import { Classtype } from "../common";
import { $inputmetaKey, Inputmeta } from "./input.meta";




export interface ICustomInput {
    type: Classtype

    options?: any
}
export function CustomInput(option: ICustomInput) {
    return (target: Object, property: string) => {
        let p = ClassMeta.Factory(target.constructor).factoryProperty(property);
        let meta: Inputmeta = {
            inputclass: option.type,
            options: option.options
        }
        p.setMeta($inputmetaKey, meta);
    }
}
