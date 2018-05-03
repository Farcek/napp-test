import { InputRenderer } from "../form-common";
import { PropertyMeta } from "../metadata";
import React from "react";

export class Fullname implements InputRenderer {
    propery: PropertyMeta;
    options?: any;
    render(dto: any, state: any) {
        return <div>
            <label>Custom input</label>
            <div>
                propery: {JSON.stringify(this.propery)}
                <hr />
                options : {JSON.stringify(this.options)}
                <hr />
                fname: <input name="fname" />
                lname: <input name="lname" />
            </div>
        </div>
    }
}