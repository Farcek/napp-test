import { ClassMeta } from "../metadata";
import { Classtype } from "../common";
import { Columnmeta, $columnmetaKey } from "./column.meta";
import { Columntype } from "./column.type";





export interface ILinkColumn {
    uri?: string | { (item: any, state: any): string }
}
export function LinkColumn(option?: ILinkColumn) {
    return (target: Object, property: string) => {
        let p = ClassMeta.Factory(target.constructor).factoryProperty(property);
        let meta: Columnmeta = {
            columntype: Columntype.link,
            options: option
        }
        p.setMeta($columnmetaKey, meta);
    }
}
