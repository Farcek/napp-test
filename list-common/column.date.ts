import { ClassMeta } from "../metadata";
import { Classtype } from "../common";
import { Columnmeta, $columnmetaKey } from "./column.meta";
import { Columntype } from "./column.type";





export interface IDateColumn {

}
export function DateColumn(option?: IDateColumn) {
    return (target: Object, property: string) => {
        let p = ClassMeta.Factory(target.constructor).factoryProperty(property);
        let meta: Columnmeta = {
            columntype: Columntype.date,
            options: option
        }
        p.setMeta($columnmetaKey, meta);
    }
}
