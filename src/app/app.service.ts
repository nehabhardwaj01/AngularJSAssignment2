import {Injectable} from '@angular/core'
import {Task} from "./task";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Http, Headers} from "@angular/http";

@Injectable()
export class AppService{
    
    constructor(private http:Http){}

    tasks: Task[];

    add(task:Task){
        this.addData(task).subscribe((data:any) =>{
        }, (err:any)=>{
            console.log(err)
        }, ()=>{
            alert("Task Added.")
        });
    }

    delete(index:string){
        this.deleteData(index).subscribe((data:any) =>{
        }, (err:any)=>{
            console.log(err)
        }, ()=>{
            alert("Task Deleted.")
        });
    }

    update(task:Task){
        this.updateData(task).subscribe((data:any) =>{
        }, (err:any)=>{
            console.log(err)
        }, ()=>{
            alert("Updated Succesfully")
        });
    }

    extractData(res:any){
        let errMsg:string;
        let body = res.json();
        return body;
    }

    getData():Observable<any> {
        let jsonHeaders = new Headers({
            'Content-Type': 'application/json'
        })

        return this.http.get('http://localhost:9000/get/all', {headers:jsonHeaders})
            .map((response:any)=>{
            return this.extractData(response);
        });

    }

    deleteData(id:string):Observable<any> {
        let jsonHeaders = new Headers({
            'Content-Type': 'application/json'
        })

        return this.http.get('http://localhost:9000/remove/'+id, {headers:jsonHeaders})
            .map((response:any)=>{
                return this.extractData(response);
            });

    }

    addData(task:Task):Observable<any>{
        let jsonHeaders = new Headers({
            'Content-Type': 'application/json'
        })

        let obj = {
            date: task.date,
            title: task.title,
            description: task.description,
            priority: task.priority
        };

        return this.http.post('http://localhost:9000/add', obj, {headers:jsonHeaders})
            .map((response:any)=>{
                return this.extractData(response)
                }).catch((e:any)=>{
                console.log("Couldn't add task");
                return Observable.throw<any>(new Error("error"));
            });
    }

    updateData(task:Task):Observable<any>{
        let jsonHeaders = new Headers({
            'Content-Type': 'application/json'
        })

        let obj = {
            _id:task._id,
            date: task.date,
            title: task.title,
            description: task.description,
            priority: task.priority
        };

        return this.http.post('http://localhost:9000/update', obj, {headers:jsonHeaders})
            .map((response:any)=>{
                return this.extractData(response)
            }).catch((e:any)=>{
                console.log("Something's fishy");
                return Observable.throw<any>(new Error("error"));
            });
    }

}