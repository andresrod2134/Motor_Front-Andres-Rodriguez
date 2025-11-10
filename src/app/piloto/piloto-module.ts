import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PilotoListComponent } from './piloto-list/piloto-list.component';
import { PilotoDetailComponent } from './piloto-detail/piloto-detail.component';


@NgModule({
  declarations: [PilotoListComponent, PilotoDetailComponent],
  imports: [
    CommonModule
  ],
  exports: [PilotoListComponent]
})
export class PilotoModule { }
