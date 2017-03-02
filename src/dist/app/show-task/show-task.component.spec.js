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
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
describe('Show-Task component should', function () {
    var de;
    var comp;
    var fixture;
    var service;
    var router;
    var MockRouter = (function () {
        function MockRouter() {
        }
        MockRouter.prototype.navigate = function () {
            return Promise.resolve(true);
        };
        return MockRouter;
    }());
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [app_component_1.AppComponent, create_task_component_1.CreateComponent, show_task_component_1.ShowComponent],
            providers: [router_1.RouterOutletMap, app_service_1.AppService],
            imports: [testing_2.RouterTestingModule, platform_browser_2.BrowserModule, forms_1.FormsModule, common_1.CommonModule, http_1.HttpModule],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(show_task_component_1.ShowComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
        comp.tasks = [{
                date: '01/01/1990',
                title: 'Tasks',
                description: 'Fake Array of Tasks',
                priority: 'low',
                _id: '001'
            }];
        service = fixture.debugElement.injector.get(app_service_1.AppService);
        router = fixture.debugElement.injector.get(router_1.Router);
    });
    it('should create show-task component', function () { return expect(comp).toBeDefined(); });
    it('should load page', function () {
        spyOn(comp, 'refresh');
        comp.ngOnInit();
        expect(comp.refresh).toHaveBeenCalled();
    });
    it('should be able to fetch data from the database', function () {
        spyOn(service, 'getData').and.returnValue(Observable_1.Observable.of([{
                date: '01/01/2017',
                title: 'Welcome Interns',
                description: 'Interns are Knolders :) ',
                priority: 'high',
                _id: '002'
            }]));
        comp.refresh();
        expect(comp.tasks).toEqual([{
                date: '01/01/2017',
                title: 'Welcome Interns',
                description: 'Interns are Knolders :) ',
                priority: 'high',
                _id: '002'
            }]);
    });
    it('should throw an error while data can\'t b fetched', function () {
        spyOn(console, 'log');
        spyOn(service, 'getData').and.returnValue(Observable_1.Observable.throw(Error('Error Occured')));
        comp.refresh();
        expect(console.log).toHaveBeenCalledWith(Error('Error Occured'));
    });
    it('should be able to delete data when done', function () {
        spyOn(window, 'alert');
        spyOn(comp, "refresh");
        spyOn(service, 'delete').and.returnValue(Observable_1.Observable.of([{
                date: '',
                title: '',
                description: '',
                priority: '',
                _id: ''
            }]));
        comp.done(0);
        expect(comp.refresh).toHaveBeenCalled();
        router.navigate([]).then(function (data) {
            expect(data).toBe(true);
        });
    });
    it('Should go back to Create-Task', function () {
        comp.edit(0);
        router.navigate([]).then(function (data) {
            expect(data).toBe(true);
        });
    });
});
//# sourceMappingURL=show-task.component.spec.js.map