import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
@Input() parentData: any;
@Output() myEvent: EventEmitter<number> =new EventEmitter<number>();
result:any;
  constructor() { }

  ngOnInit(): void {
  }
//This is simple example of template ref variable
  // addition(num1:any,num2:any){
  //   // this.result=+num1 + +num2;
  // }


  //this is sendiNG data child to parent component
  addition(num1:string,num2:string):void{
    const sum= +num1 + +num2;
    this.myEvent.emit(sum);
  }
}
