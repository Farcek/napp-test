import { ClassMeta } from "../metadata";
import { Classtype } from "../common";
import { Columnmeta, $columnmetaKey } from "./column.meta";
import { Columntype } from "./column.type";





export interface IFloatColumn {

}
export function FloatColumn(option?: IFloatColumn) {
    return (target: Object, property: string) => {
        let p = ClassMeta.Factory(target.constructor).factoryProperty(property);
        let meta: Columnmeta = {
            columntype: Columntype.float,
            options: option
        }
        p.setMeta($columnmetaKey, meta);
    }
}
