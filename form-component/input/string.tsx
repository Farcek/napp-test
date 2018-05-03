
import { BaseInputRenderer } from "./base";
import { NappInputString, INappInputStringProps } from "../../component/input";
import React from "react";


export class StringInputRenderer extends BaseInputRenderer {

    
    render(dto: any, state: any) {

        let $options: INappInputStringProps = {
            $value: dto && dto[this.propertyname] || '',
            $name: this.propertyname,
            $label: this.label,


        }
        return <NappInputString {...$options} />
    }
}