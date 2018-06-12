
import { BaseInputRenderer } from "./base";
import { NappInputBoolean, INappInputBoolean } from "../../component/input";
import * as React from "react";

export class BooleanInputRenderer extends BaseInputRenderer {


    render(dto: any, state: any) {

        let $options: INappInputBoolean = {
            $value: dto && dto[this.propertyname] || '',
            $name: this.propertyname,
            $label: this.label,
            $error : this.errors,
        }
        return <NappInputBoolean {...$options} />
    }
}