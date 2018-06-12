import { ClassMeta } from "@napp-meta";
import { Columnmeta, $columnmetaKey } from "./column.meta";
import { Columntype } from "./column.type";





export interface IStringColumn {

}
export function StringColumn(option?: IStringColumn) {
    return (target: Object, property: string) => {
        let p = ClassMeta.Factory(target.constructor).factoryProperty(property);
        let meta: Columnmeta = {
            columntype: Columntype.string,
            options: option
        }
        p.setMeta($columnmetaKey, meta);
    }
}
