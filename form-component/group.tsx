import * as React from "react";




import { Classtype, IPropertiesError } from "@napp-common";
import { ClassMeta } from "@napp-meta";
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
        let { $class, $dto, $group, $state, $error } = this.props;

        let meta = ClassMeta.Factory($class);

        let proporties = meta.getProporties()
            .filter(p => {
                if ($group == '*') return true;
                return $group && p.group == $group
            })
        
            

        return proporties.map(p => {
            let renderer = factoryInput(p);
            renderer.errors = $error;
            return renderer.render($dto, $state)
        })

    }
}