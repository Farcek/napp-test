import { Get, IAction, PathParam, QueryParam } from "classrouter2";
import { FormView } from "../napp-application";
import { Property } from "../metadata";
import { input, form } from "../form-common";
import React from "react";
import { Fullname } from "./custom.input";



@form({ cancel: '/cancel', submit : (s)=>`/aaahaha` })
export class FormMeta {

    @Property()
    @input.int()
    id: number

    @Property() 
    name: string = '12'


    @Property({ name: 'Тайлбар' })
    @input.text({
        row : 5
    })
    desc: string


    @Property()
    @input.html({
        ckConfig : {}
    })
    content: string


    @Property()
    flag : boolean

    @Property()
    publish : Date


    @Property({})
    @input.custom({
        type: Fullname,
        options: { aa: 11 }
    })
    fullname: string
}


@Get({ path: '/form' })
export class FormAction implements IAction {


    action() {
        let frm = new FormView(new FormMeta());

        return frm;
    }
}
