import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarcaListComponent } from './marca/marca-list/marca-list.component';
import { MarcaDetailComponent } from './marca/marca-detail/marca-detail.component';
import { PilotoListComponent } from './piloto/piloto-list/piloto-list.component';
import { PilotoDetailComponent } from './piloto/piloto-detail/piloto-detail.component';
import { PilotoRoutingModule } from './piloto/piloto-routing.module';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'home', loadChildren: () => import('./home-page/home-page-module').then(m => m.HomePageModule) },

  { path: 'piloto', loadChildren: () => import('./piloto/piloto-module').then(m => m.PilotoModule) },

  { path: 'marcas', component: MarcaListComponent },
  { path: 'marcas/:id', component: MarcaDetailComponent },

  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


