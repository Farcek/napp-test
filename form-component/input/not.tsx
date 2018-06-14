import { BaseInputRenderer } from "./base";
import * as React from "react";
import { PropertyMeta } from "@napp-meta";

export class NotsuportInput extends BaseInputRenderer {

    constructor(
        propery: PropertyMeta,
        options?: any,
    ) {
        super(propery);
        this.options = options;
    }

    public render(dto: any, state: any) {
        return <div >Not suported inout</div>;
    }
}
