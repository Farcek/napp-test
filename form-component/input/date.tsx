import * as React from "react";
import { BaseInputRenderer } from "./base";
import { NappInputDate, INappInputDateProps } from "../../component/input";

export class DateInputRenderer extends BaseInputRenderer {

    public render(dto: any, state: any) {

        let $options: INappInputDateProps = {
            $value: dto && dto[this.propertyname] || "",
            $name: this.propertyname,
            $label: this.label,
            $error : this.errors,
        };

        return <NappInputDate {...$options} />;
    }
}
