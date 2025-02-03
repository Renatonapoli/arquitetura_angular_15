import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth-component/auth-component.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
  },

  {
    path: 'dashboard',
    component: UserDashboardComponent,
  },

  {
    path: 'edit-user/id',
    component: UserFormComponent,
  },

  {
    path: 'add-user',
    component: UserFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RouterDashboard {}
