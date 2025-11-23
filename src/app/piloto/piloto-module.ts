import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';   
import { PilotoListComponent } from './piloto-list/piloto-list.component';
import { PilotoDetailComponent } from './piloto-detail/piloto-detail.component';
import { PilotoRoutingModule } from './piloto-routing.module';

@NgModule({
  declarations: [
    PilotoListComponent,
    PilotoDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,       
    PilotoRoutingModule
  ]
})
export class PilotoModule { }

