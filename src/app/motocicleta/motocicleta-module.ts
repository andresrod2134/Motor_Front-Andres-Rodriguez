import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MotocicletaList } from './motocicleta-list/motocicleta-list';



@NgModule({
  declarations: [
    MotocicletaList
  ],
  imports: [
    CommonModule
  ],
  exports: [MotocicletaList],
})
export class MotocicletaModule { }
