import { ClassMeta } from "../metadata";
import { Classtype } from "../common";
import { Columnmeta, $columnmetaKey } from "./column.meta";

export interface ICustomColumn {
    renderclass: Classtype
    options?: string
}
export function CustomColumn(option: ICustomColumn) {
    return (target: Object, property: string) => {
        let p = ClassMeta.Factory(target.constructor).factoryProperty(property);
        let meta: Columnmeta = {
            columnclass: option.renderclass,
            options: option.options
        }
        p.setMeta($columnmetaKey, meta);
    }
}
