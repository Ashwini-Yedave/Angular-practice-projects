import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  title = 'AgularApp2';
  // result:any;
  result:number=0;
  //send data parent to child component use the @Input decorater
  // data="hello";
  empData:any[]=[];
  http: any;

  consatructor(){}

  ngOnInit(){
  //  this.getEmp();a
  }
//  getEmp(){
//   this.http.get('https://dummy.restapiexample.com/api/v1/employees').subscribe((res:any) =>{
//     this.empData=res;
//     console.log("======",this.empData)   
//    },
//     (    error: any) => {
//     console.error('Error fetching city list:', error);
//  }
//   );
//  }

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
