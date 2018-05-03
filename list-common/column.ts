import { ActionColumn } from './column.action'
import { columnFormat } from './column.format'
import { LinkColumn } from './column.link'

import { StringColumn } from './column.string'

export const column = {
    action: ActionColumn,
    link: LinkColumn,
    string: StringColumn,
    format: columnFormat
}