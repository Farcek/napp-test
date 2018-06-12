import { Classtype } from "@napp-common";
import * as React from "react";


import { NappMetaform } from "@napp-form-component";
import { NappContainer } from "./container";


export interface PFormView<D, S> {
    dto: D
    state?: S

    errors? : any
}
export class FormView<T, S> {

    public classtype: Classtype
    public dto: T
    state?: S;
    errors?: any;

    constructor(params: PFormView<T, S>) {
        this.dto = params.dto
        this.classtype = params.dto.constructor as Classtype
        this.state = params.state
        this.errors = params.errors;
    }

    render() {
        return <NappContainer>
            <NappMetaform $class={this.classtype} $dto={this.dto} $error={this.errors} $state={this.state} />
        </NappContainer>
    }
}