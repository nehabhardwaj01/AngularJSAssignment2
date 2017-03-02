// /// <reference path="../../node_modules/@types/jasmine/index.d.ts" />
"use strict";
var app_component_1 = require('../app.component');
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var platform_browser_2 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var common_1 = require('@angular/common');
var app_service_1 = require("../app.service");
var http_1 = require('@angular/http');
var create_task_component_1 = require("../create-task/create-task.component");
var show_task_component_1 = require("../show-task/show-task.component");
var testing_2 = require("@angular/router/testing");
describe('Show-Task component should', function () {
    var de;
    var comp;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [app_component_1.AppComponent, create_task_component_1.CreateComponent, show_task_component_1.ShowComponent],
            providers: [router_1.RouterOutletMap, app_service_1.AppService],
            imports: [testing_2.RouterTestingModule, platform_browser_2.BrowserModule, forms_1.FormsModule, common_1.CommonModule, http_1.HttpModule],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(create_task_component_1.CreateComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
    });
    it('should create create-task component', function () { return expect(comp).toBeDefined(); });
});
//# sourceMappingURL=create-task.component.spec.js.map