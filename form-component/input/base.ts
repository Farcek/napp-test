
import { PropertyMeta } from "../../metadata";
import { InputRenderer } from "../../form-common";


export abstract class BaseInputRenderer implements InputRenderer {


    abstract render(dto: any, state: any): any;
    public propery: PropertyMeta
    public options?: any


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