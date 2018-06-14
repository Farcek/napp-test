import * as React from "react";

import { NappMetaformInputs } from "./group";
import { FormContext } from "./context";

export interface INappFormLayoutProps {
    group: string;
}

export class NappFormLayout extends React.Component<INappFormLayoutProps, any> {
    public render() {
        return <FormContext.Consumer>
            {(frm) => {
                return <NappMetaformInputs $class={frm.$class} $dto={frm.$dto} $state={frm.$state} $error={frm.$error} $group={this.props.group} />;
            }}
        </FormContext.Consumer>;
    }
}
