
import { BaseColumn } from "./base";

export class TextColumnRenderer extends BaseColumn {

    public render(row: any, state: any) {
        if (this.propery) {
            return (row && row[this.propery.propertyname]) || "";
        }
        return "";
    }
}
