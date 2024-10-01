import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
list:any[]=[];
  constructor() { }

  ngOnInit(): void {
  }

  addTask(item:string){
    //add the enterend task into the list array
   this.list.push(
    {
      id:this.list.length,
      name:item
    });
    console.warn(this.list);
  }

  removeTask(id:number){
    console.warn(id);
    this.list=this.list.filter(item => item.id!==id)
  }

}
