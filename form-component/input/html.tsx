
import { BaseInputRenderer } from "./base";
import { NappInputHtml, PNappInputHtmlProps } from "../../component/input";
import React from "react";
import { IHtmlInput } from "../../form-common";


export class HtmlInputRenderer extends BaseInputRenderer {


    render(dto: any, state: any) {

        let options: IHtmlInput = this.options

        let $options: PNappInputHtmlProps = {
            $value: dto && dto[this.propertyname] || '',
            $name: this.propertyname,
            $label: this.label,

            $ckConfig: options && options.ckConfig
        }
        return <NappInputHtml {...$options} />
    }
}