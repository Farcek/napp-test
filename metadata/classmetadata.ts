import { PropertyMeta, IProperty } from "./property";

const $MetaKey = 'desgin:napp:classmeta';



export class ClassMeta {

    private _metas: { [key: string]: any } = {}


    private _proporties: { [p: string]: PropertyMeta } = {}




    factoryProperty(propertyname: string, p?: IProperty) {
        let m = new PropertyMeta();
        if (propertyname in this._proporties) {
            m = this._proporties[propertyname];
        }
        m.update(p || {});

        return this._proporties[propertyname] = m;
    }

    getProporties() {
        return Object
            .keys(this._proporties)
            .map(p => {
                return this._proporties[p]
            })
            .sort((aa, bb) => {
                if (aa.order < bb.order)
                    return -1;
                if (aa.order > bb.order)
                    return 1;
                return 0;
            })
    }

    setMeta(key: string, meta: any) {
        this._metas[key] = meta;
    }
    getMeta(key: string) {
        if (key in this._metas) {
            return this._metas[key]
        }
    }

    factoryMeta(key: string, initmeta: any) {
        if (key in this._metas) {
            return this._metas[key]
        }
        return (this._metas[key] = initmeta);
    }

    static Factory(clss: Object) {
        let meta: ClassMeta = Reflect.getMetadata($MetaKey, clss);
        if (meta instanceof ClassMeta) {
            return meta;
        }

        meta = new ClassMeta();
        Reflect.defineMetadata($MetaKey, meta, clss);
        return meta;
    }
}