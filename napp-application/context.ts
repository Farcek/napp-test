import * as React from "react";
import { Classtype } from "@napp-common";

export interface IAppContext {
    Applayout?: Classtype
}

export const AppContext = React.createContext<IAppContext>({

});