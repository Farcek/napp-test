import * as React from "react";
import { INappInput, INappInputIcon } from "./interface";
export interface INappInputNumberProps extends INappInput, INappInputIcon {
    $value?: number;

    $step?: number;
}

export class NappInputNumber extends React.Component<INappInputNumberProps, {}> {

    get controlClass() {
        return `control ${this.props.Icon ? "has-icons-left" : ""} ${(this.isError || this.isSuccess) ? "has-icons-right" : ""}`;
    }

    get inputClass() {
        if (this.isError) {
            return "input is-danger";
        } else if (this.isSuccess) {
            return "input is-success";
        }
        return "input";
    }

    get isError() {
        return this.props.$error && this.props.$error.properties && this.props.$name in this.props.$error.properties && this.props.$error.properties[this.props.$name].length > 0;
    }
    get isSuccess() {
        if (this.props.$error && this.props.$error.properties) {
            if (this.props.$name in this.props.$error.properties) {
                return this.props.$error.properties[this.props.$name].length < 1;
            }
            return true;
        }
        return false;
    }

    public showError() {
        if (this.props.$error && this.props.$error.properties && this.props.$name in this.props.$error.properties) {
            let errors = this.props.$error.properties[this.props.$name];
            return errors.map((err) => {
                return <div className="help is-danger">{err}</div>;
            });
        }
        return null;
    }

    public render() {
        let icon = this.props.Icon || false;

        return <div className="field">
            <label className="label">{this.props.$label}</label>
            <div className={this.controlClass}>
                <input className={this.inputClass} type="number" name={this.props.$name}
                    placeholder={this.props.$placeholder} defaultValue={`${this.props.$value || ""}`}
                    step={this.props.$step}
                />
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
        </div>;
    }
}
