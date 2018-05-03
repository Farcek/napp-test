import { ClassMeta } from "../metadata";

export const $columnformatmetaKey = 'column:format:meta';

export interface Columnformatmeta {
    format: (value: any, state: any, row: any) => string
}

export function columnFormat(format: (value: any, state: any, row: any) => string) {
    return (target: Object, property: string) => {
        let p = ClassMeta.Factory(target.constructor).factoryProperty(property);
        let meta: Columnformatmeta = { format }
        p.setMeta($columnformatmetaKey, meta);
    }
}