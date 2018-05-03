import { ClassMeta } from "./classmetadata";
import { IProperty } from "./property";





export function Property(option?: IProperty) {
    return (target: Object, property: string) => {
        let meta = ClassMeta.Factory(target.constructor);

        let m = meta.factoryProperty(property, option || {})
        m.propertyname = property;
        m.reftype = Reflect.getMetadata("design:type", target, property);
    }
}
