import { ClassMeta } from "../metadata";
import { Classtype } from "../common";
import { $inputmetaKey, Inputmeta } from "./input.meta";
import { Inputtype } from "./inputtype";




export interface ITextInput {
    row?: number
}
export function TextInput(option?: ITextInput) {
    return (target: Object, property: string) => {
        let p = ClassMeta.Factory(target.constructor).factoryProperty(property);
        let meta: Inputmeta = {
            inputtype: Inputtype.text,
            options: option
        }
        p.setMeta($inputmetaKey, meta);
    }
}
