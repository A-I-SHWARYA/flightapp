import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  view=()=>{
    return this.http.get("https://localhost:8080/viewflight")
  }
  add=(data:any)=>{
    return this.http.post("https://localhost:8080/flightAdd",data)
  }
}
