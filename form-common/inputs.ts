import { StringInput } from "./input.string";
import { TextInput } from "./input.text";
import { HtmlInput } from "./input.html";
import { IntegerInput } from "./input.integer";
import { FloatInput } from "./input.float";
import { BooleanInput } from "./input.boolean";
import { DateInput } from "./input.date";
import { CustomInput } from "./input.custom";

export const input = {
    string: StringInput,
    text: TextInput,
    html: HtmlInput,
    int: IntegerInput,
    float: FloatInput,
    bool: BooleanInput,
    date: DateInput,
    custom: CustomInput
}