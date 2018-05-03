import { IColumnRenderer } from "../list-common";
import { PropertyMeta } from "../metadata";

export class TestColumn implements IColumnRenderer {
    propery: PropertyMeta;
    options?: any;
    render(row: any, state: any) {
        return 'custom =>' + (row && row[this.propery.propertyname])
    }
}