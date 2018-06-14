import { ClassMeta } from "../metadata";
import { $inputmetaKey, Inputmeta } from "./input.meta";
import { Inputtype } from "./inputtype";

export interface IFloatInput {

}
export function FloatInput(option?: IFloatInput) {
    return (target: object, property: string) => {
        let p = ClassMeta.Factory(target.constructor).factoryProperty(property);
        let meta: Inputmeta = {
            inputtype: Inputtype.string,
            options: option
        };
        p.setMeta($inputmetaKey, meta);
    };
}
