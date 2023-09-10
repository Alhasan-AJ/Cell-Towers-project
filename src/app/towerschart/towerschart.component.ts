import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { CelltowerdataService } from '../service/cell-towers-data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-towerschart',
  templateUrl: './towerschart.component.html',
  styleUrls: ['./towerschart.component.css']
})
export class TowerschartComponent implements AfterViewInit { 
  
  //ViewChild decorator to get a reference to an HTML element with the template ('barChart').
  @ViewChild('barChart') barChart: any;
  canvas: any;
  ctx: any;
  towerCounts: any = {};

  constructor(private celltowerdataService: CelltowerdataService) {}

  ngAfterViewInit(): void {
    // Initialize canvas and context for chart drawing.
    this.canvas = this.barChart.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    // Fetch tower data and count towers by technology
    this.celltowerdataService.getAllCellTowers().subscribe((data) => {
      this.towerCounts = this.celltowerdataService.getNumberOfTowers(data);

      // Create the chart
      this.creatTowersChart();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
    );
  }

  // function to create the chart for the number of towers by technology
  public creatTowersChart(): void {
    const customLabels = ["5G","4G","3G","2G"];
    new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels : customLabels,
        datasets: [
          {
            label: 'Total Cell Towers',
            data: Object.values(this.towerCounts), // Tower counts
            backgroundColor: 'rgba(75, 192, 192, 0.7)', // Coluor for bars
            borderColor: 'rgba(0, 0, 140, 1)',
            borderWidth: 2
          }
        ]
      },
      options: {
        responsive: true, //making the chart responsive
        maintainAspectRatio: false,
        scales: {
          x: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Technology',
              font: {
                weight: 'bold'
              }
            }
          },
          y: {
            beginAtZero: true,
            max: 70, // range of the y-axis 0-70
            title: {
              display: true,
              text: 'Number of Cell Towers',
              font: {
                weight: 'bold'
              }
            }
          }
        },
        plugins: {
          legend: {
            display: true,
            position: 'top'
          }
        }
      }
    });
  }
}
