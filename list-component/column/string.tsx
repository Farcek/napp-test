import { IColumnRenderer, IColumn } from "../column.interface";
import { BaseColumn } from "./base";

export class StringColumnRenderer extends BaseColumn implements IColumnRenderer {



    render(row: any, state: any) {

        
        

        return (row && row[this.propery.propertyname]) || ''
    }
}