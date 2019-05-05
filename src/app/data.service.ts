

import { Injectable } from '@angular/core';
import { resolve } from 'q';
import { HttpClient } from '@angular/common/http';
import { map } from'rxjs/operators';
import { observable } from 'rxjs'

@Injectable({
 providedIn: 'root'
})
export class DataService {
 add:any;
 datas:any;

 constructor(private http:HttpClient) { }
 baseAdd(value){
   return this.http.post('https://5cb5999a07f233001424d407.mockapi.io/api/v1/userid',value).toPromise()
   .then((data)=>{
     resolve(data)
   })
}
}