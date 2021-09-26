import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GlucoseLevelsTableComponent} from './glucose-levels/components/glucose-levels-table/glucose-levels-table.component';

const routes: Routes = [
  { path: '', redirectTo: 'glucose-levels', pathMatch: 'full' },
  {
    path: 'glucose-levels',
    loadChildren: () => import('./glucose-levels/glucose-levels.module')
      .then((m) => m.GlucoseLevelsModule),  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
