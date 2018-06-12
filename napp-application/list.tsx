import { Classtype } from "@napp-common";
import * as  React from "react";
import { NappListview, NappListviewState } from "@napp-list-component";
import { AppContext } from "./context";
import { NappLayout } from "./layout";
import { NappContainer } from "./container";

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
        return <NappContainer>
            <NappListview $class={this.classtype} $state={this.state} $dtoItems={this.items} />
        </NappContainer>
    }
}