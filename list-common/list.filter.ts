import { ClassMeta } from "../metadata";
import { Classtype } from "../common";



export const $listfilterKey = 'list:filter:meta';

export interface IFilterOption {

    /**
     * placeholder
     * default : 'Search  ...'
     */
    placeholder?: string

    /**
     * Search query param name
     * default : 'q'
     */
    fieldname?: string

    /**
     * search form action url
     * defualt : ""
     */
    uri?: string | { (state: any): string }
}



export function FilterList(option: IFilterOption) {
    return (target: Object) => {
        let $classmeta = ClassMeta.Factory(target);
        console.log('option', option)
        $classmeta.setMeta($listfilterKey, option);
    }
}
