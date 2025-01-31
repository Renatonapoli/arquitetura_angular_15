import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FiltroComponent } from './components/filtros/filtro/filtro.component';
import { FormulariosModule } from './components/formularios/formularios.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login/login.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, FiltroComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormulariosModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
