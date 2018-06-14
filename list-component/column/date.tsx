import { BaseColumn } from "./base";
import { IDateColumn } from "@napp-list";
import moment from "moment";

export class DateColumnRenderer extends BaseColumn {

    public render(row: any, state: any) {
        if (this.propery) {
            let opt: IDateColumn = this.options;
            let f = (opt && opt.format) || "LLL";
            let v = (row && row[this.propery.propertyname]);
            return v ? moment(v).format(f) : "";
        }
        return "";
    }
}
