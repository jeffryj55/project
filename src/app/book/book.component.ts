
import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute } from '@angular/router';
import { DatasService } from '../datas.service';

@Component({
 selector: 'app-book',
 templateUrl: './book.component.html',
 styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
 id:any;
 bind:any;
 final:any={
   name:"",
   emailid:"",
   aadhar:"",
   city:"",
   state:"",
 }

 constructor(public routing:ActivatedRoute,public service:DatasService) { }

 ngOnInit() {
   this.id=this.routing.snapshot.params['id'];
   console.log(this.id)
   this.service.getval().subscribe(res=>{
     this.bind=res;
     for(let i=0;i<this.bind.length;i++){
       if(this.id===this.bind[i].id){
         this.final.name=this.bind[i].name
         this.final.emailid=this.bind[i].emailid
         this.final.aadhar=this.bind[i].aadhar
         this.final.city=this.bind[i].city
         this.final.state=this.bind[i].state


       }
     }
  })
 }

}