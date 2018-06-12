import { ClassMeta } from "@napp-meta";
import { Columnmeta, $columnmetaKey } from "./column.meta";
import { Columntype } from "./column.type";





export interface IIntegerColumn {

}
export function IntegerColumn(option?: IIntegerColumn) {
    return (target: Object, property: string) => {
        let p = ClassMeta.Factory(target.constructor).factoryProperty(property);
        let meta: Columnmeta = {
            columntype: Columntype.integer,
            options: option
        }
        p.setMeta($columnmetaKey, meta);
    }
}
