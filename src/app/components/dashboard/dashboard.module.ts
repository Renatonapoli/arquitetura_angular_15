import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth-component/auth-component.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserFormComponent } from './user-form/user-form.component';
import { RouterDashboard } from './dashboard-routing.module';

@NgModule({
  declarations: [AuthComponent, UserDashboardComponent, UserFormComponent],
  imports: [CommonModule, RouterDashboard],
  exports: [AuthComponent],
})
export class DashboardModule {}
