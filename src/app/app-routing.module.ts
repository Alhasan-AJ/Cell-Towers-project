import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TowerschartComponent } from './towerschart/towerschart.component';
import { TowerstableComponent } from './towerstable/towerstable.component';
import { ParentComponent } from './parent/parent.component';
import { TowerdetailsComponent } from './towerdetails/towerdetails.component';

const routes: Routes = [
  {path:"towerstable", component:TowerstableComponent},
  {path:"towerdetails/:id", component:TowerdetailsComponent},
  {path:"towerschart", component:TowerschartComponent},
  {path:"parent", component:ParentComponent},
  { path: '', redirectTo: '/parent', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
