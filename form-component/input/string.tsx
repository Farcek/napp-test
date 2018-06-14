import { BaseInputRenderer } from "./base";
import { NappInputString, INappInputStringProps } from "@napp-component/input";
import * as React from "react";

export class StringInputRenderer extends BaseInputRenderer {

    public render(dto: any, state: any) {

        let $options: INappInputStringProps = {
            $value: dto && dto[this.propertyname] || "",
            $name: this.propertyname,
            $label: this.label,
            $error: this.errors
        };

        return <NappInputString {...$options} />;
    }
}
