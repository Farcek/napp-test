import { Classtype } from "@napp-common";
import * as  React from "react";
import { NappListview, NappListviewState } from "@napp-list-component";
import { NappContainer } from "./container";

export class ListView<T> {
    constructor(public classtype: Classtype) {

    }

    public items: T[] = [];

    public state = new NappListviewState();

    public page(page: number) {
        this.state.page = page;
        return this;
    }
    public limit(limit: number) {
        this.state.limit = limit;
        return this;
    }
    public total(total: number) {
        this.state.total = total;
        return this;
    }

    public filter(query: string) {
        this.state.query = query;
        return this;
    }

    public render() {
        return <NappContainer>
            <NappListview $class={this.classtype} $state={this.state} $dtoItems={this.items} />
        </NappContainer>;
    }
}
