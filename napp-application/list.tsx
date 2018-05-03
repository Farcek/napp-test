import { Classtype } from "../common";
import React from "react";
import { AppLayBase } from "./lay.base";
import { NappListview, NappListviewState } from "../list-component";

export class ListView<T> {
    constructor(public classtype: Classtype) {

    }

    items: T[] = []

    state = new NappListviewState();

    page(page: number) {
        this.state.page = page;
        return this;
    }
    limit(limit: number) {
        this.state.limit = limit;
        return this;
    }
    total(total: number) {
        this.state.total = total;
        return this;
    }

    filter(query: string) {
        this.state.query = query;
        return this;
    }

    render() {
        return <AppLayBase>
            <NappListview $class={this.classtype} $state={this.state} $dtoItems={this.items} />
        </AppLayBase>
    }
}