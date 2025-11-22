import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageListComponent } from './home-page-list/home-page-list.component';
import { HomePageRoutingModule } from './home-page-routing.module';

@NgModule({
  declarations: [HomePageListComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule { }

