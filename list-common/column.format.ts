import { ClassMeta } from "@napp-meta";

export const $columnformatmetaKey = "column:format:meta";

export interface Columnformatmeta {
    format: (value: any, state: any, row: any) => string;
}

export function columnFormat(format: (value: any, state: any, row: any) => string) {
    return (target: object, property: string) => {
        let p = ClassMeta.Factory(target.constructor).factoryProperty(property);
        let meta: Columnformatmeta = { format };
        p.setMeta($columnformatmetaKey, meta);
    };
}
