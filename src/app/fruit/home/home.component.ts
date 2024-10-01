import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 allFruits:any=[];
  constructor(private http:HttpClient) { }

  fruits=[
        {
            "id":1,
            "name":"Apple",
             "price":120,
             "quantity":50,
             "isRipped":true
        },
        {
            "id":2,
            "name":"Banana",
             "price":130,
             "quantity":30,
             "isRipped":true
        },
        {
            "id":3,
            "name":"pineApple",
             "price":140,
             "quantity":40,
             "isRipped":false
        },
        {
            "id":4,
            "name":"Cherriy",
             "price":150,
             "quantity":50,
             "isRipped":false
        }
    ];

  ngOnInit(): void {
  
    this.fruits.forEach(fruit => {
      console.log(`${fruit.name}, Price: ${fruit.price}`);
    });
  }
}
