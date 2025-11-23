import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PilotoListComponent } from './piloto-list/piloto-list.component';
import { PilotoDetailComponent } from './piloto-detail/piloto-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' }, 
  { path: 'list', component: PilotoListComponent },
  { path: ':id', component: PilotoDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PilotoRoutingModule {}
