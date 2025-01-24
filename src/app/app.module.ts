import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FiltroComponent } from './components/filtros/filtro/filtro.component';
import { FormulariosModule } from './components/formularios/formularios.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, FiltroComponent],
  imports: [BrowserModule, AppRoutingModule, FormulariosModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
