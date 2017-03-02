
import { AppComponent } from '../app.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {RouterModule, Router, RouterOutletMap, ActivatedRoute} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {CommonModule, LocationStrategy} from '@angular/common'
import {AppService} from "../app.service";
import {HttpModule} from '@angular/http';
import {CreateComponent} from "../create-task/create-task.component";
import {ShowComponent} from "../show-task/show-task.component";
import {RouterTestingModule} from "@angular/router/testing";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";

describe('Show-Task component should', function () {
    let de: DebugElement;
    let comp: ShowComponent;
    let fixture: ComponentFixture<ShowComponent>;
    let service: AppService;
    let router: Router;

    class MockRouter {
        navigate():Promise<boolean>{
            return Promise.resolve(true)
        }
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
        fixture = TestBed.createComponent(ShowComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('h1'));
        comp.tasks = [{
            date: '01/01/1990',
            title: 'Tasks',
            description: 'Fake Array of Tasks',
            priority: 'low',
            _id: '001'
        }]
        service = fixture.debugElement.injector.get(AppService);
        router = fixture.debugElement.injector.get(Router);
    });

    it('should create show-task component', () => expect(comp).toBeDefined() );

    it('should load page', () => {
        spyOn(comp, 'refresh');
        comp.ngOnInit();
        expect(comp.refresh).toHaveBeenCalled();
    });

    it('should be able to fetch data from the database', () => {
        spyOn(service, 'getData').and.returnValue(
            Observable.of<any>(
                [{
                    date: '01/01/2017',
                    title: 'Welcome Interns',
                    description: 'Interns are Knolders :) ',
                    priority: 'high',
                    _id: '002'
                }]
            )
        );
        comp.refresh();
        expect(comp.tasks).toEqual([{
            date: '01/01/2017',
            title: 'Welcome Interns',
            description: 'Interns are Knolders :) ',
            priority: 'high',
            _id: '002'
        }])
    });

    it('should throw an error while data can\'t b fetched', () => {
        spyOn(console, 'log');
        spyOn(service, 'getData').and.returnValue(
            Observable.throw(Error('Error Occured'))
        );
        comp.refresh();
        expect(console.log).toHaveBeenCalledWith(Error('Error Occured'));
    });

    it('should be able to delete data when done',() =>{
        spyOn(window, 'alert');
        spyOn(comp, "refresh");
        spyOn(service,'delete').and.returnValue(
            Observable.of<any>(
                [{
                    date: '',
                    title: '',
                    description: '',
                    priority: '',
                    _id: ''
                }]
            )
        );

        comp.done(0);
        expect(comp.refresh).toHaveBeenCalled();
        router.navigate([]).then(data => {
            expect(data).toBe(true);
        })
    });

    it('Should go back to Create-Task', () => {
        comp.edit(0);
        router.navigate([]).then(data => {
            expect(data).toBe(true);
        })

    });


});
