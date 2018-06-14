
import { BaseInputRenderer } from "./base";
import { NappInputText, INappInputTextProps } from "@napp-component/input";
import * as React from "react";
import { ITextInput } from "@napp-form";

export class TextInputRenderer extends BaseInputRenderer {

    public render(dto: any, state: any) {

        let options: ITextInput = this.options;

        let $options: INappInputTextProps = {
            $value: dto && dto[this.propertyname] || "",
            $name: this.propertyname,
            $label: this.label,
            $error: this.errors,
            $row: options && options.row
        };
        return <NappInputText {...$options} />;
    }
}
