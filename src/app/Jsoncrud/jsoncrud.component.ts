import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-jsoncrud',
  templateUrl: './jsoncrud.component.html',
  styleUrls: ['./jsoncrud.component.css']
})
export class JsonComponent implements OnInit {
  title = 'AngularApp';
  age = 23;
  cityData:any[] =[] ;
  cityData2:any[] =[] ;
  stateData:any[] =[] ;
  
  userOj: User = new User();
 
  constructor(private http:HttpClient){}

  ngOnInit(): void {
   this.getCity();
   this.getState();
  }

  // getCity(): void {
  //   this.http.get<{ name: string }[]>("http://localhost:3000/cityList").subscribe(
  //     (res: { name: string }[]) => {
  //       this.cityData = res;
  //     },
  //     error => {
  //       console.error('Error fetching city list:', error);
  //     }
  //   );
  // }

  getCity(): void {
       this.http.get("http://localhost:3000/cityList").subscribe(
         (res:any) => {
          this.cityData2 = res;
        },
        error => {
           console.error('Error fetching city list:', error);
        }
       );
     }
  

  getState(): void {
    this.http.get<{ name: string }[]>("http://localhost:3000/stateList").subscribe(
      (res: { name: string }[]) => {
        this.stateData = res;
      },
      error => {
        console.error('Error fetching state list:', error);
      }
    );
  }
  
}
export class User{
  UserId:number;
  Username:string;
  Fname:string;
  Lname:string;
  city:string;
  state:string;
  zipcode:string;

  constructor(){
    this.UserId =0;
    this.Username ="";
    this.Fname ="";
    this.Lname ="";
    this.city ="";
    this.state ="";
    this.zipcode ="";
  }
}