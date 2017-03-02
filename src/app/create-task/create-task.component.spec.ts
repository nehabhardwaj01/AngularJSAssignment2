// /// <reference path="../../node_modules/@types/jasmine/index.d.ts" />

import { AppComponent } from '../app.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {RouterModule, Router, RouterOutletMap, ActivatedRoute} from '@angular/router';
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {CommonModule, LocationStrategy} from '@angular/common'
import {routes} from "../app.routes";
import {AppService} from "../app.service";
import {HttpModule} from '@angular/http';
import {CreateComponent} from "../create-task/create-task.component";
import {ShowComponent} from "../show-task/show-task.component";
import {RouterTestingModule} from "@angular/router/testing";
import {Observable} from 'rxjs/Observable';

describe('Create-Task component should', function () {
    let de: DebugElement;
    let comp: CreateComponent;
    let fixture: ComponentFixture<CreateComponent>;
    let service: AppService;
    let router: Router;
    let route:ActivatedRoute;
    let mockRoute:MockActivatedRoute;

    class MockRouter {
        navigate():Promise<boolean>{
            return Promise.resolve(true)
        }
    }
    class MockActivatedRoute {
        params = Observable.of<any>({'edit':'1'})
    }

    beforeEach(async(() => {
        TestBed.configureTestingModule({

            declarations: [ AppComponent, CreateComponent, ShowComponent ],
            providers: [RouterOutletMap, AppService],
            imports: [RouterTestingModule,BrowserModule, FormsModule, CommonModule, HttpModule],

        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CreateComponent);
        comp = fixture.componentInstance;
        comp.task={
            date: '02/01/2017',
            title: 'A new Task',
            description: 'Fake task created for testing',
            priority: 'medium',
            _id: '003'
        }
        de = fixture.debugElement.query(By.css('h1'));
        service = fixture.debugElement.injector.get(AppService);
        router = fixture.debugElement.injector.get(Router);
        route=fixture.debugElement.injector.get(ActivatedRoute);
    });

    it('should create create-task component', () => expect(comp).toBeDefined() );

    it('should be able to update data in case of edit', () => {
        comp.index = '003';
        spyOn(service, 'update');
        comp.submit();
        expect(service.update).toHaveBeenCalled();

    });

    it('should be able to add data in case of create-task', () => {
        spyOn(service, 'add');
        comp.submit();
        expect(service.add).toHaveBeenCalled();

    });


});
