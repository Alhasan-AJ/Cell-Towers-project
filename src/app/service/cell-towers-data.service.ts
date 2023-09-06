import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Towers } from '../interface/towers';

@Injectable({
  providedIn: 'root'
})
export class CelltowerdataService {

  constructor(private http: HttpClient) { }

  public getAllCellTowers(): Observable<any[]> {
    const apiUrl = 'http://localhost:8080/towers'; // Replace with your API URL
    return this.http.get<any[]>(apiUrl);
  }

}
