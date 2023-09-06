import { Component, OnInit } from '@angular/core';
import { Towers } from './interface/towers';
import { CelltowerdataService } from './service/cell-towers-data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cell_towers: any[] = [];

  constructor(private cellTowersService: CelltowerdataService){}

  ngOnInit() {
    this.getAllCellTowers();   
  }

  public getAllCellTowers(): void {
    this.cellTowersService.getAllCellTowers().subscribe(
      (response: any[]) => {
        this.cell_towers = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  } 
}


