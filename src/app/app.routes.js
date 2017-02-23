"use strict";
var create_component_1 = require("./create-task/create-task.component");
var show_component_1 = require("./show-task/show-task.component");
exports.routes = [{
        path: 'create-task',
        component: create_component_1.CreateComponent
    }, {
        path: 'edit/:i',
        component: create_component_1.CreateComponent
    }, {
        path: 'show-task',
        component: show_component_1.ShowComponent
    }, {
        path: '',
        redirectTo: '/show-task',
        pathMatch: 'full'
    }];
//
// export const routes:Routes = [{
//     path:'home',
//     component: HomeComponent
// },{
//     path:'login',
//     component: LoginComponent
// },{
//     path:'details/:id',
//     component: LoginComponent
// }]; 
