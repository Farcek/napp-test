import { IPropertiesError } from "@napp-common";
export interface INappInput {
    $name: string;
    $label: string;

    $value?: any;

    $placeholder?: string;

    $distabled?: boolean;
    $readonly?: boolean;

    $error?: IPropertiesError;

}

export interface INappInputIcon {
    Icon?: string;
}

export interface INappInputCustom<T> {
    options?: T;
}
