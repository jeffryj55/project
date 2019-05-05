

import { Injectable } from '@angular/core';
import { resolve } from 'q';
import { HttpClient } from '@angular/common/http';
import { map } from'rxjs/operators';
@Injectable({
 providedIn: 'root'
})
export class DatasService {
datas:any;
 constructor(private http:HttpClient) { }
 base(value){
   return this.http.post('https://5cb5999a07f233001424d407.mockapi.io/api/v1/datas',value).toPromise()
   .then((data)=>{
     resolve(data)
   })
 }
 getval(){
   return this.http.get('https://5cb5999a07f233001424d407.mockapi.io/api/v1/datas').pipe(map(data=>this.datas=data))
 }
 }