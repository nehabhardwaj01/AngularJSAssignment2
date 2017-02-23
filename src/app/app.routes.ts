import {Routes} from '@angular/router'

import {CreateComponent} from "./create-task/create-task.component";
import {ShowComponent} from "./show-task/show-task.component";

export const routes:Routes = [{
    path : 'create-task',
    component: CreateComponent

},{
    path : 'edit/:i',
    component: CreateComponent
},{
    path : 'show-task',
    component: ShowComponent

},{
    path : '',
    redirectTo: '/show-task',
    pathMatch: 'full'
}];