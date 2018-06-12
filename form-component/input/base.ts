
import { PropertyMeta } from "../../metadata";
import { InputRenderer } from "../../form-common";
import { IPropertiesError } from "../../common";


export abstract class BaseInputRenderer implements InputRenderer {


    abstract render(dto: any, state: any): any;
    public propery: PropertyMeta
    public options?: any
    public errors?: IPropertiesError

    get propertyname() {
        return this.propery.propertyname
    }

    get label() {
        return this.propery.name || this.propery.propertyname
    }

    get description() {
        return this.propery.description
    }
}