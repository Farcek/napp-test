
import { BaseInputRenderer } from "./base";
import { NappInputNumber, INappInputNumberProps } from "../../component/input";
import * as React from "react";


export class FloatInputRenderer extends BaseInputRenderer {


    render(dto: any, state: any) {

        let $options: INappInputNumberProps = {
            $value: dto && dto[this.propertyname] || '',
            $name: this.propertyname,
            $label: this.label,
            $error : this.errors,
            $step: 0.1

        }
        return <NappInputNumber {...$options} />
    }
}