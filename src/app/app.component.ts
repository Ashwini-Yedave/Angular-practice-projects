import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AgularApp2';
  // result:any;
  result:number=0;
  //send data parent to child component use the @Input decorater
  // data="hello";


  data=[
    {
      id:101,
      name:"Ashwini"
    },
    {
      id:102,
    name:"Mahesh"
    },
    {
      id:103,
    name:"Sanu"
    }
  ]

  add(num: number):void{
       
      console.log(num*num+"hello");
  }

  handleEvent(sum:number):void{
console.log("Addition of two no=",sum)
this.result=sum;
  }
}
