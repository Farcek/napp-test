import { IFilterParam, IResponseFilter } from "classrouter";
import * as React from "react";
import * as ReactDOMServer from "react-dom/server";
import { ListView } from "./list";
import { FormView } from "./form";

import { AppContext, IAppContext } from "./context";

export class NappResponseFilter implements IResponseFilter {
    constructor(private appContext: IAppContext) {

    }
    public async filter(param: IFilterParam) {
        let { actionResult, expressRes, expressReq } = param;

        if (React.isValidElement(actionResult)) {
            ReactResponse(actionResult, expressRes, expressReq, this.appContext);
            param.handled = true;
        } else if (actionResult instanceof ListView) {
            let r = actionResult.render();
            ReactResponse(r, expressRes, expressReq, this.appContext);
            param.handled = true;
        } else if (actionResult instanceof FormView) {
            let r = actionResult.render();
            ReactResponse(r, expressRes, expressReq, this.appContext);
            param.handled = true;
        }
    }
}

const tamga = `
<!--
Developed by farcek. 2018
-->
`;
export async function ReactResponse(result: any, res: any, req: any, appContext: IAppContext) {
    appContext.req = req;
    res.write("<!DOCTYPE html>" + tamga);
    ReactDOMServer
        .renderToStaticNodeStream(<AppContext.Provider value={appContext}>{result}</AppContext.Provider>)
        .pipe(res);
}
