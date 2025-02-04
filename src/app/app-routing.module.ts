import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormularioComponent } from './components/formularios/formulario/formulario.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
