import * as React from "react";
import { INappInput, INappInputIcon } from "./interface";
export interface INappInputStringProps extends INappInput, INappInputIcon {
    $value: string
}

export class NappInputString extends React.Component<INappInputStringProps, {}> {

    get controlClass() {
        //className="control has-icons-left has-icons-right"
        return `control ${this.props.Icon ? 'has-icons-left' : ''} ${(this.isError || this.isSuccess) ? 'has-icons-right' : ''}`
    }

    get inputClass() {
        if (this.isError) {
            return "input is-danger"
        } else if (this.isSuccess) {
            return "input is-success"
        }
        return "input"
    }

    get isError() {
        return this.props.$error && this.props.$error.properties && this.props.$name in this.props.$error.properties && this.props.$error.properties[this.props.$name].length > 0
    }
    get isSuccess() {
        if (this.props.$error && this.props.$error.properties) {
            if (this.props.$name in this.props.$error.properties) {
                return this.props.$error.properties[this.props.$name].length < 1
            }
            return true
        }
        return false
    }

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
        let icon = this.props.Icon || false;

        return <div className="field">
            <label className="label">{this.props.$label}</label>
            <div className={this.controlClass}>
                <input className={this.inputClass} type="text" name={this.props.$name} placeholder={this.props.$placeholder} defaultValue={this.props.$value} />
                {this.props.Icon
                    ? <span className="icon is-small is-left"><i className={`fa fa-${this.props.Icon}`}></i></span>
                    : null
                }
                {this.isError
                    ? <span className="icon is-small is-right has-text-danger" ><i className="fa fa-exclamation-triangle"></i></span>
                    : null
                }
                {this.isSuccess
                    ? <span className="icon is-small is-right has-text-success"><i className="fa fa-check"></i></span>
                    : null
                }
            </div>
            {this.showError()}
            {this.props.children}
        </div>
    }
}

