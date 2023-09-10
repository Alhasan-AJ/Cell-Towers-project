import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  showTableView = true;   //by default it will show the table view
  showChartView = false;

  // method used to switch between the two views (table && chart)
  toggleView() {
    this.showTableView = !this.showTableView;
    this.showChartView = !this.showChartView
  }

}
