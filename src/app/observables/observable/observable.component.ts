    import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  
  data:any[]=[];
  constructor() { }

  ngOnInit(): void {
  }

  myObservable =new Observable((observer) =>{
    setTimeout(() => { observer.next(1)}, 1000);
    setTimeout(() => { observer.next(2)}, 1000);
    setTimeout(() => { observer.next(3)}, 1000);
    setTimeout(() => { observer.error(new Error("something went wrong . please try again"))}, 1000);
    setTimeout(() => { observer.next(4)}, 1000);
    setTimeout(() => { observer.next(5)}, 1000);
  })

  GetAsyncData(){
    //observer
    //next, error , complete method are there
    this.myObservable.subscribe((val:any) => {
      this.data.push(val);
    });
  }
}
