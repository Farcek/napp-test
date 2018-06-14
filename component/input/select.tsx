import * as React from "react";
import { INappInput, INappInputIcon } from "./interface";
import { KeyValueCollection } from "@napp-common";

export interface NappInputSelectProps extends INappInput, INappInputIcon {

    $values: KeyValueCollection;
    $value: any;
}

export class NappInputSelect extends React.Component<NappInputSelectProps, {}> {

    get controlClass() {
        // className="control has-icons-left has-icons-right"
        return `${this.props.Icon ? "has-icons-left" : ""} ${(this.isError || this.isSuccess) ? "has-icons-right" : ""}`;
    }

    get stateClass() {
        if (this.isError) {
            return "is-danger";
        } else if (this.isSuccess) {
            return "is-success";
        }
        return "";
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
            <div className={`control ${this.controlClass}`}>
                <div className={`select ${this.stateClass}  is-fullwidth`}>
                    <select name={this.props.$name} defaultValue={this.props.$value} >
                        {this.props.$placeholder
                            ? <option hidden>{this.props.$placeholder}</option>
                            : null
                        }
                        <option value="">-- Сонго --</option>
                        {this.props.$values && this.props.$values.map((it, i) => {
                            return <option key={i} value={it.key} selected={this.props.$value === it.key}>{it.value}</option>;
                        })}

                    </select>
                </div>
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
