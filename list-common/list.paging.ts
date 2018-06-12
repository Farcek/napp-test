import { ClassMeta } from "@napp-meta";

export const $listpagingKey = 'list:paging:meta';

export interface IPagingOption {
    limit?: number
    maxpage?: number

    /**
     * search form action url
     * defualt : ""
     */
    uri?: string | { (state: any, page: number, limit: number): string }
}



export function PagingList(option: IPagingOption) {
    return (target: Object) => {
        let $classmeta = ClassMeta.Factory(target);
        $classmeta.setMeta($listpagingKey, option);
    }
}
