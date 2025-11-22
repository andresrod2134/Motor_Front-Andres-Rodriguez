import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarcaListComponent } from './marca/marca-list/marca-list.component';
import { MarcaDetailComponent } from './marca/marca-detail/marca-detail.component';

const routes: Routes = [

  // HOME AL INICIAR
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // HOMEPAGE
  { path: 'home', loadChildren: () => import('./home-page/home-page-module').then(m => m.HomePageModule) },

  // PILOTO
  { path: 'piloto', loadChildren: () => import('./piloto/piloto-module').then(m => m.PilotoModule) },

  // MARCAS
  { path: 'marcas', component: MarcaListComponent },
  { path: 'marcas/:id', component: MarcaDetailComponent },

  // CUALQUIER OTRA RUTA → HOME
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

