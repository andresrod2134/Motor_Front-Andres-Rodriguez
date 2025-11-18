import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CompetenciaModule } from './competencia/competencia-module';
import { PilotoModule } from './piloto/piloto-module';
import { MotocicletaModule } from './motocicleta/motocicleta-module';
import { ParticipacionModule } from './participacion/participacion-module';
import { ToastrModule } from 'ngx-toastr';
import { HttpErrorInterceptorService } from './interceptors/http-error-interceptor.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
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
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      })

  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
    {
    provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptorService,
      multi: true
    }
  ],
  bootstrap: [App]
})
export class AppModule { }
