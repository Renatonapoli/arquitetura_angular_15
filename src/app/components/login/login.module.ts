import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HomeComponentLogin } from '../login/home/home.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginComponent, HomeComponentLogin],
  imports: [FormsModule, CommonModule, RouterModule],
  exports: [LoginComponent],
})
export class LoginModule {}
