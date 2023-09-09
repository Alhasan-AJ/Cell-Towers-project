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

  // Fetch all cell towers data from the API.
  public getAllCellTowers(): Observable<any[]> {
    const apiUrl = `${this.apiUrl}/towers`; 
    //was implemented for testing
    const jsonFile = 'assets/cell-towers.json'
    return this.http.get<any[]>(apiUrl);
  }

  // get the total number of tower cells by technology
  public getNumberOfTowers(data: any[]): any {
    const counts: { [technology: string]: number } = {};

    // foreach loop to iterate through each cell tower in the data array,
    // and return the object 'counts' which represents the number of tower cells for each technology  
    data.forEach((towers) =>{
      const technology = towers.technology
      counts[technology] = (counts[technology] || 0) + 1;
  });
  return counts; 
}

// public getTowerDetails(id: string): Observable<any> {
//   const apiUrl = `${this.apiUrl}/towers/${id}`; // Corrected apiUrl
//   return this.http.get<Towers>(apiUrl);
// }


}

