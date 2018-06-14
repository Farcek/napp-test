import { BaseColumn } from "./base";
import { ILinkColumn } from "@napp-list";
import * as React from "react";

export class LinkColumnRenderer extends BaseColumn {

    public render(row: any, state: any) {
        let m: ILinkColumn = this.options;

        if (this.propery) {
            let uri = "";
            if (typeof m.uri === "string") {
                uri = m.uri;
            } else if (typeof m.uri === "function") {
                uri = m.uri(row, state);
            }
            return <a href={uri}> {row[this.propery.propertyname]} </a>;
        }
        return "";
    }
}
