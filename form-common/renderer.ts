import { PropertyMeta } from "../metadata";


export interface InputRenderer {
    propery: PropertyMeta

    options?: any
    render(dto: any, state: any): any
}