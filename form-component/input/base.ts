import { PropertyMeta } from "@napp-meta";
import { InputRenderer } from "@napp-form";
import { IPropertiesError } from "@napp-common";

export abstract class BaseInputRenderer implements InputRenderer {

    constructor(public propery: PropertyMeta) {

    }

    public abstract render(dto: any, state: any): any;

    public options?: any;
    public errors?: IPropertiesError;

    public get propertyname() {
        return this.propery.propertyname;
    }

    public get label() {
        return this.propery.name || this.propery.propertyname;
    }

    public get description() {
        return this.propery.description;
    }
}
