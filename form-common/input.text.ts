import { ClassMeta } from "@napp-meta";
import { $inputmetaKey, Inputmeta } from "./input.meta";
import { Inputtype } from "./inputtype";

export interface ITextInput {
    row?: number;
}
export function TextInput(option?: ITextInput) {
    return (target: object, property: string) => {
        let p = ClassMeta.Factory(target.constructor).factoryProperty(property);
        let meta: Inputmeta = {
            inputtype: Inputtype.text,
            options: option
        };
        p.setMeta($inputmetaKey, meta);
    };
}
