import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UsersService  {
  
  constructor(private http: HttpClient) {}
   postData(data: any): Observable<any> {

    return this.http.post(`${environment.apiUrl}/login`, data)
}





}






