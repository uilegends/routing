import { DailywaysComponent } from './dailyways/dailyways.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SometimesComponent } from './sometimes/sometimes.component';

const routes: Routes = [
  { path: 'dailyways', component: DailywaysComponent },
  { path: 'sometimes', component: SometimesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
