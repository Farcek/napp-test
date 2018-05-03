import { ClassMeta } from "./classmetadata";
import { Classtype } from "../common";

export interface IProperty {
    name?: string
    description?: string

    group?: string

    order?: number
}

export class PropertyMeta {
    propertyname: string = ''

    reftype: Classtype

    name: string = ''
    description: string = ''
    group: string = ''
    order: number = 0

    private _metas: { [key: string]: any } = {}

    update(meta: IProperty) {
        this.name = meta.name || this.name;
        this.description = meta.description || this.description;
        this.group = meta.group || this.group;
        this.order = meta.order || this.order;



    }

    setMeta(key: string, meta: any) {
        this._metas[key] = meta;
    }
    getMeta<T>(key: string): T | null {
        if (key in this._metas) {
            return this._metas[key]
        }
        return null
    }
}





