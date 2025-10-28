import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CompetenciaModule } from './competencia/competencia-module';
import { MarcaModule } from './marca/marca-module';
import { PilotoModule } from './piloto/piloto-module';
import { MotocicletaModule } from './motocicleta/motocicleta-module';
import { PilotoList } from './piloto/piloto-list/piloto-list';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompetenciaModule,
    MarcaModule,
    PilotoModule,
    MotocicletaModule
  ],
  exports: [PilotoList],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
