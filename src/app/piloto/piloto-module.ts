import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PilotoListComponent } from './piloto-list/piloto-list.component';



@NgModule({
  declarations: [PilotoListComponent],
  imports: [
    CommonModule
  ],
  exports: [PilotoListComponent]
})
export class PilotoModule { }
