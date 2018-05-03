import { Controller } from 'classrouter2';
import { listAction } from './list.action';
import { FormAction } from './form.action';






@Controller({
   
    actions: [
        listAction, FormAction
    ]
})
export class PageController { }