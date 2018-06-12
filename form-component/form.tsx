import * as React from "react";
import { Classtype, IPropertiesError } from "@napp-common";
import { ClassMeta } from "@napp-meta";
import { NappForm } from "@napp-component";
import { $FormMetakey, IForm } from "@napp-form";
import { NappMetaformInputs } from "./group";
import { FormContext } from "./context";
const PropTypes = require('prop-types');

// import { IFormError } from "../interface";
// import { NappForm } from "./form";
// import { NappFormBody } from "./body";


// import { Classtype } from "@napp-common/common";
// import { NappFormMetadata, Inputtype } from "@napp-common/form";


export interface INappMetaformProps {
    $error?: IPropertiesError
    $class: Classtype
    $dto: any

    $state?: any

}

export class NappMetaform extends React.Component<INappMetaformProps, {}> {


    actionCancel($from: IForm, $state: any) {
        if ($from && $from.cancel) {
            let $a = $from.cancel;
            if (typeof $a === 'string') {
                return $a;
            }
            if (typeof $a === 'function') {
                return $a($state);
            }
        }
        return '';
    }
    actionSubmit($from: IForm, $state: any) {

        if ($from && $from.submit) {
            let $a = $from.submit;
            if (typeof $a === 'string') {
                return $a;
            }
            if (typeof $a === 'function') {
                return $a($state);
            }
        }
        return '';
    }

    render() {
        let { $class, $error, $dto, $state } = this.props;
        let $meta = ClassMeta.Factory($class);



        let $from: IForm = $meta.getMeta($FormMetakey) || {};
        let Layout = $from.layout;



        return <NappForm $error={$error} $method={$from.method}
            $cancel={this.actionCancel($from, $state)}
            $submit={this.actionSubmit($from, $state)} >
            {Layout
                ? <FormContext.Provider value={{ $class, $dto, $state, $error }}> <Layout /></FormContext.Provider>
                : <NappMetaformInputs $class={$class} $dto={$dto} $state={$state} $error={$error} $group="*" />
            }
        </NappForm>;
    }
}

