import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewflight',
  templateUrl: './viewflight.component.html',
  styleUrls: ['./viewflight.component.css']
})
export class ViewflightComponent implements OnInit {

  constructor(private myapi:ApiService) { this.fetchdata()}
  fetchdata=()=>{
    this.myapi.view().subscribe(
      (data)=>
      {
      this.list=data
    })
  }
  list:any=[]

  ngOnInit(): void {
  }

}
