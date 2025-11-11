import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CompetenciaModule } from './competencia/competencia-module';
import { PilotoModule } from './piloto/piloto-module';
import { MotocicletaModule } from './motocicleta/motocicleta-module';
import { ParticipacionModule } from './participacion/participacion-module';
import { HttpClientModule } from '@angular/common/http';
import { MarcaListComponent } from './marca/marca-list/marca-list.component';
import { MarcaDetailComponent } from './marca/marca-detail/marca-detail.component';


@NgModule({
  declarations: [
    App,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompetenciaModule,
    PilotoModule,
    MotocicletaModule,
    ParticipacionModule,
    HttpClientModule

  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
