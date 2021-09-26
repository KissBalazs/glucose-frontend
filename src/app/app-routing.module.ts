import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GlucoseLevelsTableComponent} from './glucose-levels/components/glucose-levels-table/glucose-levels-table.component';

const routes: Routes = [
  { path: '', redirectTo: 'glucose-levels', pathMatch: 'full' },
  {
    path: 'glucose-levels',
    component: GlucoseLevelsTableComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
