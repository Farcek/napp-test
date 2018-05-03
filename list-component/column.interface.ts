import { IProperty } from "../metadata";
import { Columnmeta } from "../list-common";

export interface IColumnRenderer {

    render: (row: any, state: any) => any
}
export interface IColumn {
    meta?: Columnmeta
    propery: IProperty
}