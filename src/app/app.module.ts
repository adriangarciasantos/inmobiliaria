import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Componentes
import { DetalleComponent } from './components/detalle/detalle.component';
import { ListadoComponent } from './components/listado/listado.component';
import { Page404Component } from './components/page404/page404.component';
import { LoginComponent } from './components/login/login.component';
import { BackofficeComponent } from './components/backoffice/backoffice.component';

//Providers
import { CasaService } from './providers/casa.service';
import { LoginService } from './providers/login.service';

//Pipes
import { PrecioPipe } from './pipes/precio.pipe';
import { TipoViviendaPipe } from './pipes/tipo-vivienda.pipe';

//Guards
import { BackofficeGuard } from './guards/backoffice.guard';

@NgModule({
  declarations: [
    AppComponent,
    DetalleComponent,
    ListadoComponent,
    Page404Component,
    LoginComponent,
    BackofficeComponent,
    PrecioPipe,
    TipoViviendaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    CasaService,
    LoginService,
    BackofficeGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
