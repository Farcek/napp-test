
import { BaseColumn } from "./base";

export class TextColumnRenderer extends BaseColumn {



    render(row: any, state: any) {

        
        

        return (row && row[this.propery.propertyname]) || ''
    }
}