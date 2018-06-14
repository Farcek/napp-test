import { ClassMeta } from "@napp-meta";
import { Classtype } from "@napp-common";
import { Columnmeta, $columnmetaKey } from "./column.meta";

export interface ICustomColumn {
    renderclass: Classtype;
    options?: any;
}
export function CustomColumn(option: ICustomColumn) {
    return (target: object, property: string) => {
        let p = ClassMeta.Factory(target.constructor).factoryProperty(property);
        let meta: Columnmeta = {
            columnclass: option.renderclass,
            options: option.options
        };
        p.setMeta($columnmetaKey, meta);
    };
}
