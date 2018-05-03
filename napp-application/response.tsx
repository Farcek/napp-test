import { IFilterParam, IResponseFilter } from "classrouter2";
import React from "react";
import ReactDOMServer from 'react-dom/server';
import { ListView } from "./list";
import { FormView } from "./form";

const PropTypes = require('prop-types');

class AppContext extends React.Component<{ viewContext: any }, {}> {

    getChildContext() {
        return {
            viewContext: this.props.viewContext
        };
    }
    static childContextTypes = {
        viewContext: PropTypes.object
    }
    render() {
        return this.props.children;
    }

}

export class NappResponseFilter implements IResponseFilter {
    constructor(private factory: (req: any) => any) {

    }
    async filter(param: IFilterParam) {
        let { actionResult, expressRes, expressReq } = param;

        if (React.isValidElement(actionResult)) {

            ReactResponse(actionResult, expressRes, expressReq, this.factory)
            param.handled = true;
        } else if (actionResult instanceof ListView) {
            let r = actionResult.render();
            ReactResponse(r, expressRes, expressReq, this.factory)
            param.handled = true;
        } else if (actionResult instanceof FormView) {
            let r = actionResult.render();
            ReactResponse(r, expressRes, expressReq, this.factory)
            param.handled = true;
        }
    }
}

const tamga = `
<!--
Developed by farcek. 2018
-->
`;
export async function ReactResponse(result: any, res: any, req: any, factory: (req: any) => any) {
    let viewContext = factory(req);

    res.write('<!DOCTYPE html>' + tamga);

    ReactDOMServer.renderToStaticNodeStream(<AppContext viewContext={viewContext} > {result} </AppContext>)
        .pipe(res);
}