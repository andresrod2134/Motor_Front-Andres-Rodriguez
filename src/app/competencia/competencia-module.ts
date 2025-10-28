import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetenciaList } from './competencia-list/competencia-list';



@NgModule({
  declarations: [
    CompetenciaList
  ],
  imports: [
    CommonModule
  ],
  exports: [CompetenciaList]
})
export class CompetenciaModule { }
