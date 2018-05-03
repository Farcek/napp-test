import { IColumnRenderer, IColumn } from "../column.interface";
import { PropertyMeta } from "../../metadata";

export class BaseColumn {

    constructor(
        protected propery: PropertyMeta,
        protected options: any,
    ) {

    }


}