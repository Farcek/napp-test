import { ClassMeta } from "@napp-meta";
import { Columnmeta, $columnmetaKey } from "./column.meta";
import { Columntype } from "./column.type";





export interface IBooleanColumn {

}
export function BooleanColumn(option?: IBooleanColumn) {
    return (target: Object, property: string) => {
        let p = ClassMeta.Factory(target.constructor).factoryProperty(property);
        let meta: Columnmeta = {
            columntype: Columntype.boolean,
            options: option
        }
        p.setMeta($columnmetaKey, meta);
    }
}
