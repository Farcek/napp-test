import { IColumnRenderer, IColumn } from "../column.interface";
import { PropertyMeta } from "../../metadata";

export abstract class BaseColumn implements IColumnRenderer {

    abstract render(dto: any, state: any): any;
    propery: PropertyMeta
    options?: any


}