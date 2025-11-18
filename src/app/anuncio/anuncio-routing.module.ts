import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnuncioListComponent } from './anuncio-list/anuncio-list.component';
import { AnuncioDetailComponent } from './anuncio-detail/anuncio-detail.component';
import { AnuncioCreateComponent } from './anuncio-create/anuncio-create.component';

const routes: Routes = [
  {
    path: 'create',
    component: AnuncioCreateComponent
  },
  {
    path: 'list',
    component: AnuncioListComponent
  },
  {
    path: ':id',
    component: AnuncioDetailComponent
  },

];


@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class AnuncioRoutingModule { }