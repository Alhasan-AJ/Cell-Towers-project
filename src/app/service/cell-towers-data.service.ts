import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Towers } from '../interface/towers';

@Injectable({
  providedIn: 'root'
})
export class CelltowerdataService { 
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public getAllCellTowers(): Observable<any[]> {
    const apiUrl = `${this.apiUrl}/towers`; 
    // Replace with your API URL
    const jsonFile = 'assets/cell-towers.json'
    return this.http.get<any[]>(apiUrl);
  }

  public getNumberOfTowers(data: any[]): any {
    const counts: { [technology: string]: number } = {};

    data.forEach((towers) =>{
      const technology = towers.technology
      counts[technology] = (counts[technology] || 0) + 1;
  });
  console.log(counts);
  return counts; 
}
public getTowerDetails(id: string): Observable<any> {
  const apiUrl = `${this.apiUrl}/towers/${id}`; // Corrected apiUrl
  return this.http.get<Towers>(apiUrl);
}


}

