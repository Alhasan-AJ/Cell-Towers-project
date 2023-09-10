//This component was created for the approach to achieve the bonus requirement 

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CelltowerdataService } from '../service/cell-towers-data.service';

@Component({
  selector: 'app-towerdetails',
  templateUrl: './towerdetails.component.html',
  styleUrls: ['./towerdetails.component.css']
})
export class TowerdetailsComponent implements OnInit {
  
  constructor(
    private route: ActivatedRoute,
    private cellTowersService: CelltowerdataService
  ) {}

  ngOnInit(): void {}
  //   const towerID = +this.route.snapshot.paramMap.get('tower_id'); // Use the + operator to convert to a number
  //   console.warn(towerID);
  //   if (!isNaN(towerID)) { // Check if towerID is a valid number
  //     this.cellTowersService.getTowerDetails(towerID).subscribe((data) => {
  //       console.warn(data);
  //     });
  //   } else {
  //     console.error('Invalid towerID:', towerID);
  //   }
  // }
  }
