import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlucoseLevelsTableComponent } from './components/glucose-levels-table/glucose-levels-table.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {GlucoseLevelsRoutingModule} from './glucose-levels-routing.module';
import {FlexModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    GlucoseLevelsTableComponent
  ],
  imports: [
    CommonModule,
    GlucoseLevelsRoutingModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    FlexModule,
    MatButtonModule
  ],
  exports: [
    GlucoseLevelsTableComponent
  ]
})
export class GlucoseLevelsModule { }
