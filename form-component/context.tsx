import * as React from "react";
import { Classtype, IPropertiesError } from "@napp-common";

export interface IFormContext {
    $class: Classtype;
    $dto: any;

    $state?: any;
    $error?: IPropertiesError;

}

export const FormContext = React.createContext<IFormContext>({
    $class: String,
    $dto: {}
});
