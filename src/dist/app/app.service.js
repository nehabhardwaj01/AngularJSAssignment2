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
var Observable_1 = require("rxjs/Observable");
require('rxjs/add/observable/of');
require('rxjs/add/observable/throw');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var http_1 = require("@angular/http");
var AppService = (function () {
    function AppService(http) {
        this.http = http;
    }
    AppService.prototype.add = function (task) {
        this.addData(task).subscribe(function (data) {
        }, function (err) {
            console.log(err);
        }, function () {
            alert("Task Added.");
        });
    };
    AppService.prototype.delete = function (index) {
        this.deleteData(index).subscribe(function (data) {
        }, function (err) {
            console.log(err);
        }, function () {
            alert("Task Deleted.");
        });
    };
    AppService.prototype.update = function (task) {
        this.updateData(task).subscribe(function (data) {
        }, function (err) {
            console.log(err);
        }, function () {
            alert("Updated Succesfully");
        });
    };
    AppService.prototype.extractData = function (res) {
        var errMsg;
        var body = res.json();
        return body;
    };
    AppService.prototype.getData = function () {
        var _this = this;
        var jsonHeaders = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http.get('http://localhost:9000/get/all', { headers: jsonHeaders })
            .map(function (response) {
            return _this.extractData(response);
        });
    };
    AppService.prototype.deleteData = function (id) {
        var _this = this;
        var jsonHeaders = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http.get('http://localhost:9000/remove/' + id, { headers: jsonHeaders })
            .map(function (response) {
            return _this.extractData(response);
        });
    };
    AppService.prototype.addData = function (task) {
        var _this = this;
        var jsonHeaders = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        var obj = {
            date: task.date,
            title: task.title,
            description: task.description,
            priority: task.priority
        };
        return this.http.post('http://localhost:9000/add', obj, { headers: jsonHeaders })
            .map(function (response) {
            return _this.extractData(response);
        }).catch(function (e) {
            console.log("Couldn't add task");
            return Observable_1.Observable.throw(new Error("error"));
        });
    };
    AppService.prototype.updateData = function (task) {
        var _this = this;
        var jsonHeaders = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        var obj = {
            _id: task._id,
            date: task.date,
            title: task.title,
            description: task.description,
            priority: task.priority
        };
        return this.http.post('http://localhost:9000/update', obj, { headers: jsonHeaders })
            .map(function (response) {
            return _this.extractData(response);
        }).catch(function (e) {
            console.log("Something's fishy");
            return Observable_1.Observable.throw(new Error("error"));
        });
    };
    AppService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map