import {Component, OnInit} from '@angular/core';
import {AppService} from "./app.service";
@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: [''],
})

export class AppComponent implements OnInit {
    
    constructor(private service: AppService) {}

    ngOnInit() {}
}


