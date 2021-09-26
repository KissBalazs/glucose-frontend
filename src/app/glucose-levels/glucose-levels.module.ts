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
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';

/**
 * Module to contain the datatable.
 */
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
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
  exports: [
    GlucoseLevelsTableComponent
  ]
})
export class GlucoseLevelsModule { }
