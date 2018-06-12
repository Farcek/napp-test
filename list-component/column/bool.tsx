import { BaseColumn } from "./base";
import React = require("react");
export class BooleanColumnRenderer extends BaseColumn {
    render(row: any, state: any) {

        let v = (row && row[this.propery.propertyname]);
        return v ? <span className="icon"><i className="fa fa-check"></i></span> : ''
    }
}