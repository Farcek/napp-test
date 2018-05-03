import { ClassMeta } from "../metadata";
import { Classtype } from "../common";
import { $inputmetaKey, Inputmeta } from "./input.meta";
import { Inputtype } from "./inputtype";




export interface IHtmlInput {
    ckConfig?: any
}
export function HtmlInput(option?: IHtmlInput) {
    return (target: Object, property: string) => {
        let p = ClassMeta.Factory(target.constructor).factoryProperty(property);
        let meta: Inputmeta = {
            inputtype: Inputtype.html,
            options: option
        }
        p.setMeta($inputmetaKey, meta);
    }
}
