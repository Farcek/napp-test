import * as React from "react";
import { AppContext } from "./context";
import { NappLayout } from "./layout";




export class NappContainer extends React.Component<{}, {}> {


    render() {
        return <AppContext.Consumer>
            {(appContext) => {
                let Applayout = appContext.Applayout || NappLayout;
                return <Applayout>
                    {this.props.children}
                </Applayout>
            }}
        </AppContext.Consumer>
    }
}


