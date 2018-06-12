import { PropertyMeta } from "@napp-meta";
import { IPropertiesError } from "@napp-common";


export interface InputRenderer {
    propery: PropertyMeta

    options?: any
    
    errors?: IPropertiesError

    render(dto: any, state: any): any
}