import { IColumnRenderer, IColumn } from "../column.interface";
import { BaseColumn } from "./base";
import { ILinkColumn } from "../../list-common";
import React from "react";

export class LinkColumnRenderer extends BaseColumn implements IColumnRenderer {



    render(row: any, state: any) {


        let m: ILinkColumn = this.options


        let uri = '';
        if (typeof m.uri === 'string') {
            uri = m.uri;
        } else if (typeof m.uri === 'function') {
            uri = m.uri(row, state);
        }
        return <a href={uri}> {row[this.propery.propertyname]} </a>


    }
}