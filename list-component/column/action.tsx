
import { BaseColumn } from "./base";
import { IActionColumnOptions } from "@napp-list";
import * as React from "react";

export class ActionColumnRenderer extends BaseColumn {



    render(row: any, state: any) {

        let actionmeta: IActionColumnOptions = this.options

        if (actionmeta && Array.isArray(actionmeta.actions)) {
            return actionmeta.actions.map((m, i) => {
                let uri = '';
                if (typeof m.uri === 'string') {
                    uri = m.uri;
                } else if (typeof m.uri === 'function') {
                    uri = m.uri(row, state);
                }
                return <a key={i} href={uri}> <span className="icon"> <i className={`fa fa-${m.icon}`}></i> </span> </a>
            })
        }

        return null;
    }
}