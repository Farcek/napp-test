import { BaseInputRenderer } from "./base";
import { NappInputHtml, PNappInputHtmlProps } from "@napp-component/input";
import * as React from "react";
import { IHtmlInput } from "@napp-form";

export class HtmlInputRenderer extends BaseInputRenderer {

    public render(dto: any, state: any) {

        let options: IHtmlInput = this.options;

        let $options: PNappInputHtmlProps = {
            $value: dto && dto[this.propertyname] || "",
            $name: this.propertyname,
            $label: this.label,
            $error : this.errors,
            $ckConfig: options && options.ckConfig
        };
        return <NappInputHtml {...$options} />;
    }
}
