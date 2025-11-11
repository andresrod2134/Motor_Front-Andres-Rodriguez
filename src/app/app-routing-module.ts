import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarcaListComponent } from './marca/marca-list/marca-list.component';
import { MarcaDetailComponent } from './marca/marca-detail/marca-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'marcas', pathMatch: 'full' },

  { path: 'marcas', component: MarcaListComponent, renderMode: 'server' },

  { path: 'marcas/:id', component: MarcaDetailComponent, renderMode: 'client' },

  { path: '**', redirectTo: 'marcas' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
