import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import {debounceTime, filter, map, switchMap, tap} from 'rxjs/operators';
import { ajax}from 'rxjs/ajax';

@Component({
  selector: 'app-rxjs-oprations',
  templateUrl: './rxjs-oprations.component.html',
  styleUrls: ['./rxjs-oprations.component.css']
})
export class RxjsOprationsComponent implements OnInit {
///if we want access the dom element insidde the ngOnInit fun then we use the static:true
  @ViewChild('search',{static:true})search?:ElementRef<HTMLInputElement>
  
  typeAheadSub?:Subscription;
  users:any=[];
  constructor() { }

  ngOnInit(): void {
  //using the fromEvent we can create observable by using the dom element
  const searchObs= fromEvent(this.search!.nativeElement,"input")
  .pipe(
    // map((inputEvent:any) =>inputEvent.target.value
      
    debounceTime(1000),
    //filter used for check value is empty then not return anything
    filter ( (e:any)=> e.target.value !=""),
   switchMap((e:any)=>{
          return ajax(`https://api.github.com/search/users?q=${e.target.value}`)
    }),
    map((ajaajaxresponse) =>ajaajaxresponse.response.items)
    )         
  // this.typeAheadSub=searchObs.subscribe((value:any) =>{ 
  //      console.log(value)
  //      this.users=value;
  // })



   //observable= who emits the data
   const obs=new Observable((subscriber) =>{
    subscriber.next({name:"farm house",veg:true,size:"small"})
    // subscriber.next({name:"barbique",veg:true,size:"large"})
    // subscriber.next({name:"margherita",veg:false,size:"medium"})
    subscriber.complete() //after writing the complete fun we cannot emit the value
  }).pipe(
    tap((pizza:any) => {
    //   if(pizza.size == "large")
    // throw new  Error("large size pizzasa are not available")
      //console.log("log from pipe :",pizza)})  use for debugging pupose and tap oprator not modified the data
  }),
    filter((pizza:any)=> pizza.veg==true),
    map((pizza :any)=>pizza.name),
  )


  //subscriber/oberver = who consume the data
  //inside the subscriber we pass the object that is called as bserver
  ///one way.....
  // obs.subscribe({
  //   next:(value)=>console.log(value),
  //   error:(err)=>console.log(err.message), //catch the errr and print not implement remaing code
  //   complete:()=>console.log("i am done eating pizzas" )
  // }

  //second way...
  obs.subscribe(
   (value)=>console.log(value),
    (err)=>console.log(err.message), //catch the errr and print not implement remaing code
    ()=>console.log("i am done eating pizzas" )
  )

  //if we make a multiple subscriber then we called this concept unicast/cold observable   
  obs.subscribe(
    (value)=>console.log(value),
     (err)=>console.log(err.message), //catch the errr and print not implement remaing code
     ()=>console.log("i am done eating pizzas" )
   )

}

ngOnDestroy() {
  //for unsubscribe the observable and app component can not destroy
this.typeAheadSub?.unsubscribe();
}
}
