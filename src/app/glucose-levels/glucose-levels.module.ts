import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlucoseLevelsTableComponent } from './components/glucose-levels-table/glucose-levels-table.component';

@NgModule({
  declarations: [
    GlucoseLevelsTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GlucoseLevelsTableComponent
  ]
})
export class GlucoseLevelsModule { }
