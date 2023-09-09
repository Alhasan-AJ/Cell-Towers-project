import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatFormField, MatFormFieldAppearance } from '@angular/material/form-field';
import { Towers } from '../interface/towers';
import { CelltowerdataService } from '../service/cell-towers-data.service';

@Component({
  selector: 'app-towerstable',
  templateUrl: './towerstable.component.html',
  styleUrls: ['./towerstable.component.css']
})

export class TowerstableComponent implements OnInit {
  cell_towers: Towers[] = [];

  constructor(
    private cellTowersService: CelltowerdataService){}

  ngOnInit() {
    this.getAllCellTowers(); 
  }

  dataSource = new MatTableDataSource<Towers>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('input') searchInput:any

  public getAllCellTowers(): void {
    this.cellTowersService.getAllCellTowers().subscribe(
      (response: any[]) => {
        this.cell_towers = response;
        this.dataSource = new MatTableDataSource(this.cell_towers);
        this.dataSource.paginator = this.paginator
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  searchEngine(event: Event) : void{
    const filterData = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterData.trim().toLowerCase();
  }
  displayedColumns: string[] = ['tower_id', 'operator', 'address', 'height', 'tower_type', 'latitude', 'longitude', 'technology','tower_details'];
}



