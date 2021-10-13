import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VubApiService {

  constructor(private http: HttpClient) { }

  //public url = "https://renergisetool.evergi.be/";

  getServerName(){
    var url = "https://renergisetool.evergi.be/users/";
    return this.http.get(url);
  }
}
