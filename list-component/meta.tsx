import * as React from "react";
import { Classtype } from "@napp-common";
import { PNappTableAction, PNappTableQuery, PNappTableColumn, NappTable } from "@napp-component/table";
import { PNappPaginationProps } from "@napp-component/pagination";

import { ClassMeta } from "@napp-meta";
import { $listactionKey, IListActions, $listfilterKey, IFilterOption, IPagingOption, $listpagingKey } from "@napp-list";
import { columnFactory } from "./column.factory";

export interface INappListviewProps {
    $class: Classtype;
    $state: NappListviewState;
    $dtoItems: any[];
}

export class NappListview extends React.Component<INappListviewProps, {}> {

    public buildPaging($Classtype: Classtype, state: NappListviewState): PNappPaginationProps {
        let classmeta = ClassMeta.Factory($Classtype);

        let $paging: IPagingOption | null = classmeta.getMeta($listpagingKey);

        return {
            limit: (state && state.limit) || ($paging && $paging.limit) || 0,
            maxpage: $paging && $paging.maxpage || 0,
            page: state && state.page,
            uri: (page: number, limit: number) => {

                if ($paging && typeof $paging.uri === "string") {
                    return `${$paging.uri}?page=${page}&limit=${limit}&q=${state.query ? state.query : ""}`;
                }
                if ($paging && typeof $paging.uri === "function") {
                    return $paging.uri(state, page, limit);
                }
                return `?page=${page}&limit=${limit}&q=${state.query ? state.query : ""}`;
            },
            total: state && state.total
        };
    }

    private buildColumns($Classtype: Classtype, state: NappListviewState): PNappTableColumn<any>[] {
        let classmeta = ClassMeta.Factory($Classtype);

        let columns = classmeta.getProporties()
            .map(($col) => {
                let renderer = columnFactory($col);

                let col: PNappTableColumn<any> = {};

                col.title = $col.name || $col.propertyname;
                // col.align = $col.align;
                // col.size = $col.size;

                col.render = (row: any, i, arr) => {
                    return renderer.render(row, state);
                };
                // this.buildColumnRender($meta, col, $col, p);
                return col;
            });

        return columns;
    }

    private buildFilter($Classtype: Classtype, state: NappListviewState): PNappTableQuery | undefined {

        let classmeta = ClassMeta.Factory($Classtype);

        let filterMeta: IFilterOption = classmeta.getMeta($listfilterKey);

        if (filterMeta) {
            let filter: PNappTableQuery = {
                qvalue: state && state.query
            };

            if (filterMeta && filterMeta.fieldname) {
                filter.qname = filterMeta.fieldname;
            }
            if (filterMeta && filterMeta.placeholder) {
                filter.qplaceholder = filterMeta.placeholder;
            }
            if (filterMeta && filterMeta.uri) {

                if (typeof (filterMeta.uri) === "string") {
                    filter.qurl = filterMeta.uri;
                } else if (typeof (filterMeta.uri) === "function") {
                    filter.qurl = filterMeta.uri(state);
                }
            }
            return filter;
        }
    }

    private buildActions($Classtype: Classtype, state: NappListviewState): PNappTableAction[] {

        let classmeta = ClassMeta.Factory($Classtype);

        let listactionMeta: IListActions = classmeta.getMeta($listactionKey);

        if (listactionMeta && Array.isArray(listactionMeta.actions)) {

            return listactionMeta.actions.map((a) => {

                let uri = "";
                if (typeof (a.uri) === "string") {
                    uri = a.uri;
                } else if (typeof (a.uri) === "function") {
                    uri = a.uri(state);
                }

                let meta: PNappTableAction = {
                    label: a.label || "",
                    icon: a.icon,
                    url: uri
                };

                return meta;
            });
        }

        return [];
    }

    public render() {
        let props = this.props;
        let $state = this.props.$state;

        let $Classtype = props.$class;

        let columns = this.buildColumns($Classtype, $state);
        let filter = this.buildFilter($Classtype, $state);

        let actions = this.buildActions($Classtype, $state);

        let paging = this.buildPaging($Classtype, $state);

        // let aa = await new Promise((r) => {
        //     setTimeout(() => {
        //         r(11);
        //     }, 10000);
        // });

        return <NappTable
            columns={columns}
            items={props.$dtoItems}
            query={filter}
            paging={paging}
            actions={actions}
        />;

    }
}

export class NappListviewState {
    public query?: string;

    public limit?: number;
    public page?: number;

    public total?: number;
    public paging?: PNappPaginationProps;
}
