import { PropertyMeta } from "../metadata";
import { IColumnRenderer } from "./column.interface";
import { Columnformatmeta, $columnformatmetaKey, $columnmetaKey, Columnmeta, Columntype } from "../list-common";
import { Classtype } from "../common";
import { StringColumnRenderer } from "./column/string";
import { ActionColumnRenderer } from "./column/action";
import { LinkColumnRenderer } from "./column/link";


function buildFormater(propery: PropertyMeta) {
    let m = propery.getMeta<Columnformatmeta>($columnformatmetaKey);
    if (m && typeof m.format === 'function') {
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

function columnclassFromColumntype(coltype: Columntype): Classtype | null {

    if (coltype === Columntype.string) {
        return StringColumnRenderer;
    } else if (coltype === Columntype.action) {
        return ActionColumnRenderer;
    } else if (coltype === Columntype.link) {
        return LinkColumnRenderer;
    }

    return null;
}

function columnclassFromClasstype(propery: PropertyMeta): Classtype | null {

    if (propery.reftype === String) {
        return StringColumnRenderer;
    }

    return null;
}
function factoryClass(propery: PropertyMeta, $col: Columnmeta | null) {
    let classtype: Classtype | null = null;
    let options: any;

    if ($col) {

        if ($col.columnclass) {
            classtype = $col.columnclass
        } else if ($col.columntype) {
            classtype = columnclassFromColumntype($col.columntype);
        }

        options = $col.options || {}
    }

    if (classtype) {
        return { classtype, options }
    }


    classtype = columnclassFromClasstype(propery);
    options = $col && $col.options || {}
    if (classtype) {
        return { classtype, options }
    }

    classtype = StringColumnRenderer
    return { classtype, options }
}

export function columnFactory(propery: PropertyMeta): IColumnRenderer {
    let formater = buildFormater(propery);

    let $col: Columnmeta | null = propery.getMeta($columnmetaKey)


    let { classtype, options } = factoryClass(propery, $col);

    return new classtype(propery, options);

}


// private buildColumnRender(listMeta: NappListMetadata, col: PNappTableColumn<any>, $col: IColumn, p: string) {


    //     let formater = this.buildFormater($col, col, p);

    //     if ($col.type === Columntype.string) {
    //         return (item: any) => {
    //             return formater(item);
    //         };
    //     } else if ($col.type === Columntype.text) {
    //         return (item: any) => {
    //             return formater(item);
    //         };
    //     } else if ($col.type === Columntype.integer) {
    //         return (item: any) => {
    //             return formater(item);
    //         };
    //     } else if ($col.type === Columntype.float) {
    //         return (item: any) => {
    //             return formater(item);
    //         };
    //     } else if ($col.type === Columntype.boolean) {
    //         return (item: any) => {
    //             return formater(item);
    //         };
    //     } else if ($col.type === Columntype.date) {
    //         return (item: any) => {
    //             return formater(item);
    //         };
    //     } else if ($col.type === Columntype.action) {
    //         let actions: IColumnAction[] = $col.options;

    //         return (item: any) => {
    //             return actions.map((a, i) => {
    //                 let uri = (item: any) => {
    //                     if (a.urlFactory) return a.urlFactory(item);
    //                     return a.url || '';
    //                 }
    //                 return <a href={uri(item)} action-confirm="delete ?" >
    //                     {a.icon
    //                         ? <span className="icon"><i className={`fa fa-${a.icon}`} key={i} /></span>
    //                         : null
    //                     }
    //                 </a>
    //             })

    //         };
    //     } else if ($col.type === Columntype.link) {
    //         let $action: IColumnLink = $col.options;
    //         let uri = (item: any) => {
    //             if ($action.urlFactory) return $action.urlFactory(item);
    //             return $action.url || '';
    //         }
    //         return (item: any) => {
    //             return <a href={uri(item)} >{formater(item)}</a>
    //         };
    //     }

    //     return col.render = () => 'not supported render'
    // }