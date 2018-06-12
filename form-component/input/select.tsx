
import { BaseInputRenderer } from "./base";
import { NappInputSelectProps, NappInputSelect } from "../../component/input";
import * as React from "react";
import { ISelectInput } from "../../form-common/index";
import { KeyValueCollection } from "../../common/index";


export class SelectInputRenderer extends BaseInputRenderer {


    values(dto: any, state: any) {
        let opt: ISelectInput = this.options;
        if (typeof opt.values === 'function') {
            return opt.values(dto, state)
        }
        return opt.values;
    }
    render(dto: any, state: any) {



        let $options: NappInputSelectProps = {
            $value: dto && dto[this.propertyname] || '',
            $name: this.propertyname,
            $label: this.label,
            $error: this.errors,
            $values: this.values(dto, state)
        }
        return <NappInputSelect {...$options} />
    }
}