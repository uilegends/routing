import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { DailywaysComponent } from './dailyways/dailyways.component';
import { SometimesComponent } from './sometimes/sometimes.component';

@NgModule({
  declarations: [DailywaysComponent, SometimesComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
