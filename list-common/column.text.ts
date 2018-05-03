import { ClassMeta } from "../metadata";
import { Classtype } from "../common";
import { Columnmeta, $columnmetaKey } from "./column.meta";
import { Columntype } from "./column.type";





export interface ITextColumn {

}
export function TextColumn(option?: ITextColumn) {
    return (target: Object, property: string) => {
        let p = ClassMeta.Factory(target.constructor).factoryProperty(property);
        let meta: Columnmeta = {
            columntype: Columntype.text,
            options: option
        }
        p.setMeta($columnmetaKey, meta);
    }
}
