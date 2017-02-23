"use strict";
var create_task_component_1 = require("./create-task/create-task.component");
var show_task_component_1 = require("./show-task/show-task.component");
exports.routes = [{
        path: 'create-task',
        component: create_task_component_1.CreateComponent
    }, {
        path: 'edit/:i',
        component: create_task_component_1.CreateComponent
    }, {
        path: 'show-task',
        component: show_task_component_1.ShowComponent
    }, {
        path: '',
        redirectTo: '/show-task',
        pathMatch: 'full'
    }];
//# sourceMappingURL=app.routes.js.map