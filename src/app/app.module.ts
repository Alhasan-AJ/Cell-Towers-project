import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgxPaginationModule } from 'ngx-pagination';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CelltowerdataService } from './service/cell-towers-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TowerschartComponent } from './towerschart/towerschart.component';
import { TowerstableComponent } from './towerstable/towerstable.component';
import { ParentComponent } from './parent/parent.component';
import { TowerdetailsComponent } from './towerdetails/towerdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    TowerschartComponent,
    TowerstableComponent,
    ParentComponent,
    TowerdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
