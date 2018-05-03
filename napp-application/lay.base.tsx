import * as React from "react";

// import { AppMenu } from "../components/menu";
import { ApplayEmpty } from "./lay.empty";

export interface PApplayBase {
    title?: string
}



export class AppLayBase extends React.Component<PApplayBase, {}> {


    render() {
        let { title } = this.props;
        return <ApplayEmpty title={title ? `${title} - System operator` : 'System operator'}>
            
            <section className="section ">
                <div className="container">{this.props.children}</div>
            </section>
        </ApplayEmpty>;
    }
}


