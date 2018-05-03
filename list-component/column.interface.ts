import { IProperty } from "../metadata";
import { Columnmeta } from "../list-common";


export interface IColumn {
    meta?: Columnmeta
    propery: IProperty
}