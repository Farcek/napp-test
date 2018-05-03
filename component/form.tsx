import * as React from "react";
import { IPropertiesError } from "../common";


export interface INappFormProps {

    $method?: string
    $error?: IPropertiesError

    /**
     * submit and list action
     */
    $submit: string
    /**
     * cancel action
     */
    $cancel?: string

}

export class NappForm extends React.Component<INappFormProps, {}> {
    showError() {
        if (this.props.$error && this.props.$error.message) {
            return <article className="message is-danger">
                <div className="message-body">
                    {this.props.$error.message}
                </div>
            </article>
        }
        return null
    }

    render() {
        return <form action={this.props.$submit || ''} method={this.props.$method || 'post'} encType="application/x-www-form-urlencoded" >
            {this.showError()}
            {this.props.children}
            <div className="field is-grouped is-grouped-centered">
                <div className="control">
                    <div className="field has-addons">
                        <div className="control">
                            <button type="submit" className="button is-primary">
                                <span className="icon"><i className="fa fa-save" /></span><span>Хадгалах</span>
                            </button>
                        </div>

                        <div className="control">
                            <div className="dropdown is-hoverable">
                                <div className="dropdown-trigger">
                                    <a className="button is-primary" aria-haspopup="true" aria-controls="dropdown-menu">
                                        <span className="icon is-small">
                                            <i className="fa fa-angle-down" aria-hidden="true"></i>
                                        </span>
                                    </a>
                                </div>
                                <div className="dropdown-menu" role="menu">
                                    <div className="dropdown-content">
                                        <button type="submit" className="dropdown-item" name="_return_action" value="new" >
                                            Хадгалах &amp; Шинэ
                                        </button>
                                        <button type="submit" className="dropdown-item" name="_return_action" value="edit" >
                                            Хадгалах &amp; Засах
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {this.props.$cancel
                    ? <p className="control">
                        <a href={this.props.$cancel} className="button is-link">
                            <span className="icon"><i className="fa fa-undo" /></span><span>Болих</span>
                        </a>
                    </p>
                    : null
                }
            </div>
        </form >;
    }
}

