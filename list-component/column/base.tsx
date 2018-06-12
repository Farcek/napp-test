
import { PropertyMeta } from "@napp-meta";
import { IColumnRenderer } from "@napp-list";

export abstract class BaseColumn implements IColumnRenderer {

    abstract render(dto: any, state: any): any;
    propery: PropertyMeta
    options?: any


}