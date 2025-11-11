// src/app/app-module.ts
import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module'; // 👈 Asegúrate: es .module (no app-routing-module)
import { App } from './app';

import { CompetenciaModule } from './competencia/competencia-module';
import { PilotoModule } from './piloto/piloto-module';
import { MotocicletaModule } from './motocicleta/motocicleta-module';
import { ParticipacionModule } from './participacion/participacion-module';

// 👇 Estos dos componentes SON standalone (standalone: true)
import { MarcaListComponent } from './marca/marca-list/marca-list.component';
import { MarcaDetailComponent } from './marca/marca-detail/marca-detail.component';

@NgModule({
  declarations: [
    App // 👈 SOLO el root component aquí. Nada más.
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompetenciaModule,
    PilotoModule,
    MotocicletaModule,
    ParticipacionModule,
    HttpClientModule,

    // 👇 Los standalone van en imports (NO en declarations)
    MarcaListComponent,
    MarcaDetailComponent
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule {}
