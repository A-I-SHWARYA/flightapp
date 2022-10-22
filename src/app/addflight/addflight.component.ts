import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent implements OnInit {

  constructor(private myapis:ApiService) { }
 
  flight_name=""
  origin=""
  destination=""
  capacity=""
  
  
  read=()=>{
    let data={
      "flight_name":this.flight_name,
    "origin":this.origin,
    "destination":this.destination,
    "capacity":this.capacity


    }
    console.log(data)
    this.myapis.add(data).subscribe(
      (response)=>{
        alert("Successfully Added!")

    })
    this.flight_name=""
    this.origin=""
    this.destination=""
    this.capacity=""
  }

  ngOnInit(): void {
  }

}
