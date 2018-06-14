import { ClassMeta } from "@napp-meta";

export const $listactionKey = "list:action:meta";

export interface IActionList {
    label?: string;
    icon?: string;
    uri?: string | { (state: any): string };
}

export interface IListActions {
    actions: IActionList[];
}

export function ActionList(action: IActionList) {
    return (target: object) => {
        let $classmeta = ClassMeta.Factory(target);
        let listActions: IListActions = $classmeta.getMeta($listactionKey);

        if (!(listActions && listActions.actions)) {
            listActions = { actions: [] };
            $classmeta.setMeta($listactionKey, listActions);
        }
        listActions.actions.push(action);
    };
}
