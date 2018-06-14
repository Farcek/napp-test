import { ClassMeta } from "@napp-meta";

export const $listfilterKey = "list:filter:meta";

export interface IFilterOption {

    /**
     * placeholder
     * default : 'Search  ...'
     */
    placeholder?: string;

    /**
     * Search query param name
     * default : 'q'
     */
    fieldname?: string;

    /**
     * search form action url
     * defualt : ""
     */
    uri?: string | { (state: any): string };
}

export function FilterList(option: IFilterOption) {
    return (target: object) => {
        let $classmeta = ClassMeta.Factory(target);
        $classmeta.setMeta($listfilterKey, option);
    };
}
