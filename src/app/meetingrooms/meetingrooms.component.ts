import { Component, OnInit } from '@angular/core';
import { DatasService } from '../datas.service';
import { Router } from '@angular/router';

@Component({
 selector: 'app-meetingrooms',
 templateUrl: './meetingrooms.component.html',
 styleUrls: ['./meetingrooms.component.css']
})
export class MeetingroomsComponent implements OnInit {

 constructor( public datasservice:DatasService,public routing:Router) { }
 bind:any;
 ngOnInit() {
   this.get();
 }
 get(){
   this.datasservice.getval().subscribe(res=>{
     this.bind=res;
     console.log(res)
 })
}
}