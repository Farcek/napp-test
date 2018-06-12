import { Classtype } from "@napp-common";
import { Columntype } from "./column.type";

export const $columnmetaKey = 'column:meta';

export interface Columnmeta {
    columntype?: Columntype,
    columnclass?: Classtype

    options?: any
}