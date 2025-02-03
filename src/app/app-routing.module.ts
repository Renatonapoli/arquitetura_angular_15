import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HomeComponentLogin } from './components/login/home/home.component';
import { FormularioComponent } from './components/formularios/formulario/formulario.component';
import { LoginComponent } from './components/login/login/login.component';
import { FiltroComponent } from './components/filtros/filtro/filtro.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'formulario',
    component: FormularioComponent,
  },

  {
    path: 'filtro',
    component: FiltroComponent,
  },

  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'homeLogin',
    component: HomeComponentLogin,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
