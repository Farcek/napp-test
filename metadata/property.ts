import { Classtype } from "@napp-common";

export interface IProperty {
    name?: string;
    description?: string;

    group?: string;

    order?: number;
}

export class PropertyMeta {
    public propertyname: string = "";

    public reftype?: Classtype;

    public name: string = "";
    public description: string = "";
    public group: string = "";
    public order: number = 0;

    private metas: { [key: string]: any } = {};

    public update(meta: IProperty) {
        this.name = meta.name || this.name;
        this.description = meta.description || this.description;
        this.group = meta.group || this.group;
        this.order = meta.order || this.order;
    }

    public setMeta(key: string, meta: any) {
        this.metas[key] = meta;
    }
    public getMeta<T>(key: string): T | null {
        if (key in this.metas) {
            return this.metas[key];
        }
        return null;
    }
}
