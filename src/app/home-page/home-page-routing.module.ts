import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageListComponent } from './home-page-list/home-page-list.component';

const routes: Routes = [
  { path: '', component: HomePageListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
