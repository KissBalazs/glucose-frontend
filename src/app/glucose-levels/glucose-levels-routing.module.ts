import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GlucoseLevelsTableComponent} from './components/glucose-levels-table/glucose-levels-table.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: GlucoseLevelsTableComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GlucoseLevelsRoutingModule {
}
