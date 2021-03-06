import { ClassMeta } from "@napp-meta";
import { $inputmetaKey, Inputmeta } from "./input.meta";
import { Inputtype } from "./inputtype";

export interface IStringInput {

}
export function StringInput(option?: IStringInput) {
    return (target: object, property: string) => {
        let p = ClassMeta.Factory(target.constructor).factoryProperty(property);
        let meta: Inputmeta = {
            inputtype: Inputtype.string,
            options: option
        };
        p.setMeta($inputmetaKey, meta);
    };
}
