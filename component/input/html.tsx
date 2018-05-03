import * as React from "react";
import { INappInput, INappInputIcon } from "./interface";

const uuid = require('uuid/v4');
export interface PNappInputHtmlProps extends INappInput {
    $value: string

    $ckConfig: any
}

export class NappInputHtml extends React.Component<PNappInputHtmlProps, {}> {

    get controlClass() {
        //className="control has-icons-left has-icons-right"
        return `control ${(this.isError || this.isSuccess) ? 'has-icons-right' : ''}`
    }

    get inputClass() {
        if (this.isError) {
            return "textarea is-danger"
        } else if (this.isSuccess) {
            return "textarea is-success"
        }
        return "textarea"
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

        return <div className="field">
            <label className="label">{this.props.$label}</label>
            <div className={this.controlClass} napp-input-html={JSON.stringify(this.props.$ckConfig || {})}>
                <textarea hidden={true} name={this.props.$name} defaultValue={this.props.$value}></textarea>
                <div className="textarea content" style={{ height: "auto", minHeight: "800px", maxHeight: "none" }} app-component="html-editor" contentEditable={true} dangerouslySetInnerHTML={{ __html: this.props.$value }}></div>
                {/* <div className="napp-input-html-editor">
                </div> */}
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

