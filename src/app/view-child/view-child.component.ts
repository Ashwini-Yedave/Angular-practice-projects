import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit,AfterViewInit {

  //  by suing the viewchild decorator we can access the dom element from the template file and change style and behavior and value also
  //we can use for the value acesss use angular lifecycle hook AfterviewInit is the interface and the ngAfterViewInit method
  //view child decorator access the single element from the dom structure
  //for access the single value,and return the ElementRef

  @ViewChild('ref')marker!: ElementRef; 
  
  //  by suing the viewchildren decorator we can access the multiple  dom element from the template file and change style and behavior and value also
  //  we can use for the value acesss use angular lifecycle hook AfterviewInit is the interface and the ngAfterViewInit method
  //  view child decorator access the Multiple element from the dom structure
  //  for access the Collection of value value,and return the QueryList
  @ViewChildren('ref2')marker2!: QueryList<any>;
  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(){
  console.log(this.marker);
  //for acess the single value

  this.marker.nativeElement.style.color="red";
  
  //we use overthere  viewchildren there is multiple element then we can access via first ref and last ref
  console.log(this.marker2)
  this.marker2.first.nativeElement.style.color="pink";
  this.marker2.last.nativeElement.style.color="blue";
  }

}



