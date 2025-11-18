import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnuncioListComponent } from './anuncio-list/anuncio-list.component';
import { AnuncioDetailComponent } from './anuncio-detail/anuncio-detail.component';
import { AnuncioCreateComponent } from './anuncio-create/anuncio-create.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { BookRoutingModule } from './anuncio-routing.module';
import { CustomFilterPipeModule } from './custom-filter.pipe.module';



@NgModule({
  declarations: [
    AnuncioListComponent,
    AnuncioDetailComponent,
    AnuncioCreateComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    CustomFilterPipeModule,
    BookRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule
  ],
  exports: [BookListComponent],
  providers: [CustomFilterPipeModule]
})
export class AnuncioModule { }