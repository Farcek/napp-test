import { Classtype } from "@napp-common";
import { PropertyMeta } from "@napp-meta";

import { $inputmetaKey, Inputmeta, Inputtype, InputRenderer } from "@napp-form";
import { NotsuportInput } from "./input/not";
import { StringInputRenderer } from "./input/string";
import { FloatInputRenderer } from "./input/float";
import { TextInputRenderer } from "./input/text";
import { HtmlInputRenderer } from "./input/html";
import { IntegerInputRenderer } from "./input/integer";
import { BooleanInputRenderer } from "./input/boolean";
import { DateInputRenderer } from "./input/date";
import { SelectInputRenderer } from "./input/select";

function factoryInputFromClass(inputclass: Classtype, propery: PropertyMeta, options?: any): InputRenderer {

    if (inputclass) {
        let i: InputRenderer = new inputclass();
        i.propery = propery;
        i.options = options;
        return i;
    }
    return new NotsuportInput(propery, options);
}

function factoryInputFromInputtype(inputtype: Inputtype, propery: PropertyMeta, options?: any): InputRenderer {
    if (inputtype === Inputtype.string) {
        return factoryInputFromClass(StringInputRenderer, propery, options);
    }
    if (inputtype === Inputtype.text) {
        return factoryInputFromClass(TextInputRenderer, propery, options);
    }
    if (inputtype === Inputtype.html) {
        return factoryInputFromClass(HtmlInputRenderer, propery, options);
    }

    if (inputtype === Inputtype.integer) {
        return factoryInputFromClass(IntegerInputRenderer, propery, options);
    }
    if (inputtype === Inputtype.float) {
        return factoryInputFromClass(FloatInputRenderer, propery, options);
    }
    if (inputtype === Inputtype.boolean) {
        return factoryInputFromClass(BooleanInputRenderer, propery, options);
    }
    if (inputtype === Inputtype.date) {
        return factoryInputFromClass(DateInputRenderer, propery, options);
    }
    if (inputtype === Inputtype.select) {
        return factoryInputFromClass(SelectInputRenderer, propery, options);
    }

    return new NotsuportInput(propery, options);
}

function factoryMeta(propery: PropertyMeta): Inputmeta | null {

    let meta = propery.getMeta<Inputmeta>($inputmetaKey);
    if (meta) {
        return meta;
    }

    if (propery.reftype === String) {
        return {
            inputtype: Inputtype.string
        };
    }

    if (propery.reftype === Number) {
        return {
            inputtype: Inputtype.float
        };
    }

    if (propery.reftype === Date) {
        return {
            inputtype: Inputtype.date
        };
    }

    if (propery.reftype === Boolean) {
        return {
            inputtype: Inputtype.boolean
        };
    }

    return null;
}

export function factoryInput(propery: PropertyMeta): InputRenderer {

    let meta = factoryMeta(propery);

    if (meta) {
        if (meta.inputclass) {
            return factoryInputFromClass(meta.inputclass, propery, meta.options);
        }

        if (meta.inputtype) {
            return factoryInputFromInputtype(meta.inputtype, propery, meta.options);
        }
    }

    return new NotsuportInput(propery, meta && meta.options);
}
