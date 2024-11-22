import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{CtaComponent} from "./pages/home/cta/cta.component"

// guard
// import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '#Producto',
    // component:CtaComponent,
    loadChildren: () => import('./pages/home/cta/cta.component').then((m) => m.CtaComponent)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
