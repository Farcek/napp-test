import { ClassMeta } from "@napp-meta";
import { Classtype } from "@napp-common";



export const $listlayoutKey = 'list:layout:meta';

export interface ILayoutList {
    type: Classtype    
}



export function LayoutList(option: ILayoutList) {
    return (target: Object) => {
        let $classmeta = ClassMeta.Factory(target);
        $classmeta.setMeta($listlayoutKey, option);
    }
}
