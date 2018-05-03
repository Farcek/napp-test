import { PropertyMeta } from "../metadata";


export interface IColumnRenderer {
    propery: PropertyMeta
    options?: any
    render: (row: any, state: any) => any
}