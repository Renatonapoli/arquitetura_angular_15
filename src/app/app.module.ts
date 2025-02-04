import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulariosModule } from './components/formularios/formularios.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CommonModule } from '@angular/common';
import { FiltroComponent } from './components/filtros/filtro/filtro.component';
import { FormsModule } from '@angular/forms';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { InputOutputComponent } from './components/input-output/input-output.component';
import { InputOutputModule } from './components/input-output/input-output.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, FiltroComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormulariosModule,
    HttpClientModule,
    FormsModule,
    DashboardModule,
    InputOutputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
