import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  }),
};
@Injectable({
  providedIn: 'root'
})
export class ChartDataService {

  constructor(private http: HttpClient) {}

  getData(entity: any): Observable<any> {

    return this.http.get(`${environment.apiUrl}/dashboard/total/`+ entity , httpOptions)
}
}
