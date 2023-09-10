import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Towers } from '../interface/towers';
import { CelltowerdataService } from '../service/cell-towers-data.service';

@Component({
  selector: 'app-towerstable',
  templateUrl: './towerstable.component.html',
  styleUrls: ['./towerstable.component.css']
})

export class TowerstableComponent implements OnInit {
  // Array to store cell tower data
  cell_towers: Towers[] = [];

  constructor(
    private cellTowersService: CelltowerdataService){}

  ngOnInit() {
    this.getAllCellTowers(); 
  }

  // MatTableDataSource to manage and display data in a table.
  dataSource = new MatTableDataSource<Towers>();

  // ViewChild references for paginator and search input.
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('input') searchInput:any

  // fetch all the cell towers data from the service 
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

  // fucntion used to filter data based to the user input (search engine)
  public searchEngine(event: Event) : void{
    const filterData = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterData.trim().toLowerCase();  //make search function case-insensitive 
  }

  // these are the columns to be diplayed in the table
  displayedColumns: string[] = ['tower_id', 'operator', 'address', 'height', 'tower_type', 'latitude', 'longitude', 'technology','tower_details'];
}



