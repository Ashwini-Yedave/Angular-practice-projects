import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./direictives.component.css']
})
export class DirectivesComponent implements OnInit {
data=[
  {
    name:"ashwini",
  id:101
},
{
  name:"manish",
   id:102
},
{
  name:"sanavi",
  id:103
}
]
  constructor() { }

  ngOnInit(): void {
  }

}
