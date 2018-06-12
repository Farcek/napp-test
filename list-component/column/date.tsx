import { BaseColumn } from "./base";
import { IDateColumn } from "@napp-list";
import * as moment from "moment";

export class DateColumnRenderer extends BaseColumn {

    render(row: any, state: any) {
        let opt: IDateColumn = this.options;
        let f = (opt && opt.format) || 'LLL'
        let v = (row && row[this.propery.propertyname]);
        return v ? moment(v).format(f) : ''
    }
}