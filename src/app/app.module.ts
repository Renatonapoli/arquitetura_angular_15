import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulariosModule } from './components/formularios/formularios.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './components/login/login.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CommonModule } from '@angular/common';
import { FiltroComponent } from './components/filtros/filtro/filtro.component';
import { FormsModule } from '@angular/forms';
import { DashboardModule } from './components/dashboard/dashboard.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, FiltroComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormulariosModule,
    HttpClientModule,
    LoginModule,
    FormsModule,
    DashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
