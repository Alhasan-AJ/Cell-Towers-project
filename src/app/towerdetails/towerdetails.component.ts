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

  ngOnInit(): void {
      const towerID= this.route.snapshot.paramMap.get('id')
      console.warn(towerID)
      towerID && this.cellTowersService.getTowerDetails(towerID).subscribe((data)=>{
        console.warn(data)
      })
  }
}
