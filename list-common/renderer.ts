import { PropertyMeta } from "@napp-meta";

export interface IColumnRenderer {
    propery?: PropertyMeta;
    options?: any;
    render: (row: any, state: any) => any;
}
