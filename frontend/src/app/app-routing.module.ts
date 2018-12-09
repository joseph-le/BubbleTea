import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RostersComponent } from './rosters/rosters.component';
import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [
  {
    path: 'schedule',
    component: ScheduleComponent
  },
  {
    path: 'rosters',
    component: RostersComponent
  },
  {
    path: '',
    redirectTo: 'schedule',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'schedule',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
