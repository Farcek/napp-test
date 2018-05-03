
import { BaseInputRenderer } from "./base";
import { NappInputText, INappInputTextProps } from "../../component/input";
import React from "react";
import { ITextInput } from "../../form-common";


export class TextInputRenderer extends BaseInputRenderer {


    render(dto: any, state: any) {

        let options: ITextInput = this.options

        let $options: INappInputTextProps = {
            $value: dto && dto[this.propertyname] || '',
            $name: this.propertyname,
            $label: this.label,

            $row: options && options.row
        }
        return <NappInputText {...$options} />
    }
}