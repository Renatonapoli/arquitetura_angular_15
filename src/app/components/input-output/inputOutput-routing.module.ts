import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputOutputComponent } from './input-output.component';
import { FilhoComponent } from './filho/filho.component';

const routes: Routes = [
  {
    path: 'input-output',
    component: InputOutputComponent,
  },

  {
    path: 'filho',
    component: FilhoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class InputOutputRouterModule {}
