import { ClassMeta } from "@napp-meta";
import { Classtype } from "@napp-common";
import { $inputmetaKey, Inputmeta } from "./input.meta";

export const $FormMetakey = "form:meta";

export interface IForm {
    method?: string;
    submit?: string | { (state: any): string };
    cancel?: string | { (state: any): string };
    layout?: Classtype;
}
export function form(option: IForm) {
    return (target: object) => {
        let classMeta = ClassMeta.Factory(target);
        classMeta.setMeta($FormMetakey, option);
    };
}
