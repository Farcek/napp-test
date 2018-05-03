import * as React from "react";




import { Classtype, IPropertiesError } from "../common";
import { ClassMeta } from "../metadata";
import { Inputtype } from "../form-common";
import { factoryInput } from "./factory";

const PropTypes = require('prop-types');


export interface INappMetaformInputs {

    $class: Classtype
    $dto: any

    $state?: any
    $error?: IPropertiesError

    $group?: string
}

export class NappMetaformInputs extends React.Component<INappMetaformInputs, {}> {


    render() {
        let { $class, $dto, $group, $state } = this.props;

        let meta = ClassMeta.Factory($class);

        let proporties = meta.getProporties()
            .filter(p => {
                if ($group == '*') return true;

                return $group && p.group == $group
            })

        return proporties.map(p => {
            let renderer = factoryInput(p);
            return renderer.render($dto, $state)
        })

    }
}