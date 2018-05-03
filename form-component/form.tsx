import * as React from "react";
import { Classtype, IPropertiesError } from "../common";
import { ClassMeta } from "../metadata";
import { NappForm } from "../component/form";
import { $FormMetakey, IForm } from "../form-common";
import { NappMetaformInputs } from "./group";
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
    getChildContext() {
        return {
            frmError: this.props.$error,
            frmDto: this.props.$dto,
            frmState: this.props.$state
        };
    }
    static childContextTypes = {
        frmError: PropTypes.object,
        frmDto: PropTypes.object,
        frmState: PropTypes.object
    }

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
        let submit = () => {
            if ($from) {

            }
            return ''
        }
        let Layout = $from.layout;

        return <NappForm $error={$error} $method={$from.method}
            $cancel={this.actionCancel($from, $state)}
            $submit={this.actionSubmit($from, $state)} >
            {Layout
                ? <Layout />
                : <NappMetaformInputs $class={$class} $dto={$dto} $state={$state} $error={$error} $group="*" />

            }
        </NappForm>;
    }
}

