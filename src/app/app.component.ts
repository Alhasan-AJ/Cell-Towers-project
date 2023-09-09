import { Component, OnInit, ViewChild } from '@angular/core';
import { Towers } from './interface/towers';
import { CelltowerdataService } from './service/cell-towers-data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(){}
// cell_towers: Towers[] = [];
//   // currentPage = 1;

//   constructor(private cellTowersService: CelltowerdataService){}

//   ngOnInit() {
//     this.getAllCellTowers(); 
//   }

//   dataSource = new MatTableDataSource<Towers>();
//   @ViewChild(MatPaginator) paginator!: MatPaginator;

//   public getAllCellTowers(): void {
//     this.cellTowersService.getAllCellTowers().subscribe(
//       (response: any[]) => {
//         this.cell_towers = response;
//         this.dataSource = new MatTableDataSource(this.cell_towers);
//         this.dataSource.paginator = this.paginator
//       },
//       (error: HttpErrorResponse) => {
//         alert(error.message);
//       }
//     );
//   } 
//   displayedColumns: string[] = ['tower_id', 'operator', 'address', 'height', 'tower_type', 'latitude', 'longitude', 'technology'];
}


