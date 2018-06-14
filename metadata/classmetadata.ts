import { PropertyMeta, IProperty } from "./property";

const $MetaKey = "desgin:napp:classmeta";

export class ClassMeta {
    private metas: { [key: string]: any } = {};

    private proporties: { [p: string]: PropertyMeta } = {};

    public factoryProperty(propertyname: string, p?: IProperty) {
        let m = new PropertyMeta();
        if (propertyname in this.proporties) {
            m = this.proporties[propertyname];
        }
        m.update(p || {});

        return this.proporties[propertyname] = m;
    }

    public getProporties() {
        return Object
            .keys(this.proporties)
            .map((p) => {
                return this.proporties[p];
            })
            .sort((aa, bb) => {
                if (aa.order < bb.order) {
                    return -1;
                }

                if (aa.order > bb.order) {
                    return 1;
                }
                return 0;
            });
    }

    public setMeta(key: string, meta: any) {
        this.metas[key] = meta;
    }
    public getMeta(key: string) {
        if (key in this.metas) {
            return this.metas[key];
        }
    }

    public factoryMeta(key: string, initmeta: any) {
        if (key in this.metas) {
            return this.metas[key];
        }
        return (this.metas[key] = initmeta);
    }

    public static Factory(clss: object) {
        let meta: ClassMeta = Reflect.getMetadata($MetaKey, clss);
        if (meta instanceof ClassMeta) {
            return meta;
        }

        meta = new ClassMeta();
        Reflect.defineMetadata($MetaKey, meta, clss);
        return meta;
    }
}
