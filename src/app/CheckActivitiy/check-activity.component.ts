import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-check-activity',
    templateUrl: './check-activity.component.html',
    styleUrls: ['./check-activity.component.css']
  })
  export class CheckActivityComponent implements OnInit {
   
    email="ashwiniyedave93@gmail.com";
    photoUrl= "assets/Ashu pic.jpeg";

    
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }

  }