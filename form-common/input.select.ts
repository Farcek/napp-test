import { ClassMeta } from "@napp-meta";
import { KeyValueCollection } from "@napp-common";
import { $inputmetaKey, Inputmeta } from "./input.meta";
import { Inputtype } from "./inputtype";

export interface ISelectInput {
    values: KeyValueCollection | { (dto: any, state: any): KeyValueCollection };
}
export function SelectInput(option?: ISelectInput) {
    return (target: object, property: string) => {
        let p = ClassMeta.Factory(target.constructor).factoryProperty(property);
        let meta: Inputmeta = {
            inputtype: Inputtype.select,
            options: option
        };
        p.setMeta($inputmetaKey, meta);
    };
}
