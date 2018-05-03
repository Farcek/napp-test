import { Classtype } from "../common";
import React from "react";
import { AppLayBase } from "./lay.base";
import { NappMetaform } from "../form-component/form";


export class FormView<T extends Object> {

    public classtype: Classtype
    constructor(public dto: T) {
        this.classtype = dto.constructor as Classtype;
    }

    state = {};


    render() {
        return <AppLayBase>
            <NappMetaform $class={this.classtype} $dto={this.dto} $error={{}} $state={this.state} />
        </AppLayBase>
    }
}