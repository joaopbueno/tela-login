import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Guard
import { AuthGuard } from './core/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./core/component/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'admin',
    canActivateChild: [AuthGuard],
    loadChildren: () =>
      import('./component/admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
