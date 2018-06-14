import { BaseInputRenderer } from "./base";
import { NappInputSelectProps, NappInputSelect } from "@napp-component/input";
import * as React from "react";
import { ISelectInput } from "@napp-form";

export class SelectInputRenderer extends BaseInputRenderer {

    public values(dto: any, state: any) {
        let opt: ISelectInput = this.options;
        if (typeof opt.values === "function") {
            return opt.values(dto, state);
        }
        return opt.values;
    }
    public render(dto: any, state: any) {

        let $options: NappInputSelectProps = {
            $value: dto && dto[this.propertyname] || "",
            $name: this.propertyname,
            $label: this.label,
            $error: this.errors,
            $values: this.values(dto, state)
        };
        return <NappInputSelect {...$options} />;
    }
}
