import * as React from "react";

import { INappInput } from "./interface";
export interface INappInputBoolean extends INappInput {

    $value?: boolean
}

export class NappInputBoolean extends React.Component<INappInputBoolean, {}> {






    showError() {
        if (this.props.$error && this.props.$error.properties && this.props.$name in this.props.$error.properties) {
            let errors = this.props.$error.properties[this.props.$name];
            return errors.map(err => {
                return <div className="help is-danger">{err}</div>
            })
        }
        return null;
    }

    render() {

        let val = !!this.props.$value;

        return <div className="field">

            <label className="checkbox">
                <input type="checkbox" name={this.props.$name} defaultValue="1"
                    checked={val}
                    disabled={(this.props.$readonly || this.props.$distabled) ? true : false} />
                <span>{this.props.$label}</span>
            </label>


            {this.showError()}
            {this.props.children}
        </div>
    }
}

