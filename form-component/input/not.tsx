
import { BaseInputRenderer } from "./base";
import { NappInputString } from "../../component/input";
import * as React from "react";
import { PropertyMeta } from "../../metadata";

export class NotsuportInput extends BaseInputRenderer {

    constructor(
        propery: PropertyMeta,
        options?: any,
    ) {
        super();
        this.propery = propery;
        this.options = options;
    }

    render(dto: any, state: any) {

        return <div >Not suported inout</div>
    }
}