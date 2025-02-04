import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputOutputComponent } from './input-output.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { InputOutputRouterModule } from './inputOutput-routing.module';
import { FilhoComponent } from './filho/filho.component';

@NgModule({
  declarations: [InputOutputComponent, FilhoComponent],
  imports: [CommonModule, AppRoutingModule, InputOutputRouterModule],
  exports: [InputOutputComponent],
})
export class InputOutputModule {}
