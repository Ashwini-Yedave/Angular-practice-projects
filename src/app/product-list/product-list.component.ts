import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 @Input() hero: any;
  @Input() executeMethod!:(num: number)=>void;
 

 arr:any[]=["ac","gd","hj","ui","yu","er","acd","fgh"];
result:any;

 
  constructor() { }
  
  ngOnInit(): void {
  }

  callparentMethod(){
    if(this.executeMethod){
       this.result =this.executeMethod(4); 
    }
  }
  
}
