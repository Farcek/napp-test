import { ActionColumn } from './column.action'
import { columnFormat } from './column.format'
import { LinkColumn } from './column.link'

import { StringColumn } from './column.string'
import { TextColumn } from './column.text';
import { IntegerColumn } from './column.integer';
import { FloatColumn } from './column.float';
import { BooleanColumn } from './column.boolean';
import { DateColumn } from './column.date';
import { CustomColumn } from './column.custom';

export const column = {
    string: StringColumn,
    text: TextColumn,
    int: IntegerColumn,
    float: FloatColumn,
    bool: BooleanColumn,
    date: DateColumn,
    link: LinkColumn,
    action: ActionColumn,

    custom: CustomColumn,
    format: columnFormat,
}