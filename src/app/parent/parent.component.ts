import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  showTableView = true;
  showChartView = false;

  toggleView() {
    this.showTableView = !this.showTableView;
    this.showChartView = !this.showChartView
  }

}
