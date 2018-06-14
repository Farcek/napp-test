
import { PropertyMeta } from "@napp-meta";
import { IColumnRenderer } from "@napp-list";

export abstract class BaseColumn implements IColumnRenderer {

    public abstract render(dto: any, state: any): any;
    public propery?: PropertyMeta;
    public options?: any;
}
