import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth-component/auth-component.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserFormComponent } from './user-form/user-form.component';
import { userGuard } from './guards/user-guard.guard';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
  },

  {
    path: 'dashboard',
    component: UserDashboardComponent,
    canActivate: [userGuard],
  },

  {
    path: 'edit-user/id',
    component: UserFormComponent,
    canActivate: [userGuard],
  },

  {
    path: 'add-user',
    component: UserFormComponent,
    canActivate: [userGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RouterDashboard {}
