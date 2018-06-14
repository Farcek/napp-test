import { ClassMeta } from "@napp-meta";
import { Columnmeta, $columnmetaKey } from "./column.meta";
import { Columntype } from "./column.type";

export interface IActionColumn {
    icon: string;
    uri?: string | { (item: any, state: any): string };
}
export interface IActionColumnOptions {
    actions: IActionColumn[];
}

export function ActionColumn(...actions: IActionColumn[]) {
    return (target: object, property: string) => {
        let p = ClassMeta.Factory(target.constructor).factoryProperty(property);
        let actionOption: IActionColumnOptions = {
            actions
        };

        let meta: Columnmeta = {
            columntype: Columntype.action,
            options: actionOption
        };

        p.setMeta($columnmetaKey, meta);
    };
}
