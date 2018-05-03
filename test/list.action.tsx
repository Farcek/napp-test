import { Get, IAction, PathParam, QueryParam } from "classrouter2";
import { ListView } from "../napp-application";
import { Property } from "../metadata";
import React from "react";

import { column, list } from "../list-common";
import { TestColumn } from "./custom.column";



@list.action({ icon: 'plus', label: 'Create', uri: '/create' })
@list.action({ icon: 'plus', label: 'Test', uri: (s) => `/aahaa?${s}` })
@list.filter({ fieldname: 'q', uri: '/list', placeholder: 'search test ..' })
export class ListMeta {

    @Property()
    id: number

    @Property() @column.link({
        uri: (it: ListMeta) => `/edit/${it.id}`
    })
    name: string


    @Property({ name: 'Тайлбар' })
    desc: string


    @Property({ name: ' ' }) @column.action(
        { icon: 'trash', uri: (it: ListMeta) => `/del/${it.id}` },
        { icon: 'list', uri: '/sp' },
    )
    delete: string

    @Property() @column.custom({
        renderclass: TestColumn
    })
    haha: any
}


@Get({ path: '/list' })
export class listAction implements IAction {

    @QueryParam('q') q: string
    @QueryParam('page', { transform: (v) => parseInt(v) }) page: number

    action() {
        let listview = new ListView(ListMeta);
        listview
            .page(this.page)
            .limit(3)
            .total(300)
        if (this.q) {
            listview.filter(this.q);
        }
        // .filter('aa')

        listview.items = [
            { id: 1, name: '11', desc: 'd11' },
            { id: 2, name: '22', desc: 'd22' },
            { id: 3, name: '33', desc: 'd33' },
        ]

        return listview;
    }
}
