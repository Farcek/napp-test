import { Inputtype } from "./inputtype";
import { Classtype } from "@napp-common";

export const $inputmetaKey = "input:meta";
export interface Inputmeta {
    inputtype?: Inputtype;
    inputclass?: Classtype;

    options?: any;
}
