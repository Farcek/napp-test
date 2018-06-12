import { BaseColumn } from "./base";

export class StringColumnRenderer extends BaseColumn {

    render(row: any, state: any) {
        return '' + ((row && row[this.propery.propertyname]) || '')
    }
}