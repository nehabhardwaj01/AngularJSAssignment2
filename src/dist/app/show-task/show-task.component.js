"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var app_service_1 = require("../app.service");
var ShowComponent = (function () {
    function ShowComponent(router, service) {
        this.router = router;
        this.service = service;
        this.tasks = [];
    }
    ShowComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    ShowComponent.prototype.refresh = function () {
        var _this = this;
        this.service.getData().subscribe(function (data) {
            _this.tasks = data;
        }, function (err) {
            console.log(err);
        }, function () {
            console.log("Completed.");
        });
    };
    ShowComponent.prototype.edit = function (i) {
        //fetch id of the ith task.
        this.router.navigate(['edit', this.tasks[i]._id]);
    };
    ShowComponent.prototype.done = function (i) {
        //print id of the ith task.
        console.log("ID: " + this.tasks[i]._id);
        this.service.delete(this.tasks[i]._id);
        this.refresh();
    };
    ShowComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'show-task',
            templateUrl: './show-task.component.html',
            styleUrls: ['']
        }), 
        __metadata('design:paramtypes', [router_1.Router, app_service_1.AppService])
    ], ShowComponent);
    return ShowComponent;
}());
exports.ShowComponent = ShowComponent;
//# sourceMappingURL=show-task.component.js.map