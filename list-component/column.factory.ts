import { PropertyMeta } from "@napp-meta";

import { Columnformatmeta, $columnformatmetaKey, $columnmetaKey, Columnmeta, Columntype, IColumnRenderer } from "@napp-list";
import { Classtype } from "@napp-common";
import { StringColumnRenderer } from "./column/string";
import { ActionColumnRenderer } from "./column/action";
import { LinkColumnRenderer } from "./column/link";
import { DateColumnRenderer } from "./column/date";
import { BooleanColumnRenderer } from "./column/bool";

function buildFormater(propery: PropertyMeta) {
    let m = propery.getMeta<Columnformatmeta>($columnformatmetaKey);
    if (m && typeof m.format === "function") {
        return m.format;
    }

    // if ($col.formater) return $col.formater;

    // if ($col.type === Columntype.boolean) {
    //     return (item: any) => item && p in item && item[p] ? 'ok' : ''
    // }

    // if ($col.type === Columntype.date) {
    //     return (item: any) => item && p in item && item[p] ? '' + item[p] : ''
    // }

    return (value: any, state: any, row: any) => value;
}

function columnclassFromColumntype(coltype: Columntype): Classtype {

    if (coltype === Columntype.string) {
        return StringColumnRenderer;
    } else if (coltype === Columntype.date) {
        return DateColumnRenderer;
    } else if (coltype === Columntype.boolean) {
        return BooleanColumnRenderer;
    } else if (coltype === Columntype.action) {
        return ActionColumnRenderer;
    } else if (coltype === Columntype.link) {
        return LinkColumnRenderer;
    }

    return StringColumnRenderer;
}

function factoryClass($col: Columnmeta | null): Classtype {

    if ($col) {
        if ($col.columnclass) {
            return $col.columnclass;
        } else if ($col.columntype) {
            return columnclassFromColumntype($col.columntype);
        }
    }
    return StringColumnRenderer;
}

function factoryMeta(propery: PropertyMeta) {
    let $col = propery.getMeta<Columnmeta>($columnmetaKey);
    if ($col) {
        return $col;
    }

    if (propery.reftype === String) {
        return {
            columntype: Columntype.string
        };
    }

    if (propery.reftype === Number) {
        return {
            columntype: Columntype.float
        };
    }

    if (propery.reftype === Date) {
        return {
            columntype: Columntype.date
        };
    }

    if (propery.reftype === Boolean) {
        return {
            columntype: Columntype.boolean
        };
    }

    return null;
}
export function columnFactory(propery: PropertyMeta): IColumnRenderer {
    let formater = buildFormater(propery);

    let $col = factoryMeta(propery);

    let classType = factoryClass($col);

    let renderer: IColumnRenderer = new classType();
    renderer.propery = propery;
    renderer.options = $col && $col.options;

    return renderer;
}
