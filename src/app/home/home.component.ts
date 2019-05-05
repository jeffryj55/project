import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DataService } from '../data.service';
@Component({
 selector: 'app-home',
 templateUrl: './home.component.html',
 styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 db:any;
 constructor(public datasservice:DataService,public routing:Router) { }

 ngOnInit() {
 }
 addData(value){
   this.datasservice.baseAdd(value).then((data)=>{
   this.db=data;

   //this.routing.navigate(['/location']);
   console.log(value)
 })

}
}