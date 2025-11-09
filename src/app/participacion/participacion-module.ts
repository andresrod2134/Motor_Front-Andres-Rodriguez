import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticipacionListComponent } from './participacion-list/participacion-list.component';



@NgModule({
  declarations: [ParticipacionListComponent],
  imports: [
    CommonModule
  ],
  exports: [ParticipacionListComponent]
})
export class ParticipacionModule { }
