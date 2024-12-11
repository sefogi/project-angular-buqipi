import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './pages/home/contactform/contactform.component';
import { PoliticasComponent } from './pages/home/politicas/politicas.component';

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
  // {
  //   path: 'landing',
  //   loadChildren: () => import('./pages/landings/landings.module').then(m => m.LandingsModule)
  // },
  {
    path: '#Caracteristicas',
    loadChildren: () => import('./pages/home/features/features.component').then(m => m.FeaturesComponent)
  },
  {
    path: '#Precios',
    loadChildren: () => import('./pages/home/pricing/pricing.component').then(m => m.PricingComponent)
  },
  {
    path: 'Contacto',
    component:ContactFormComponent
  },
  {
    path: 'Politicas',
    component:PoliticasComponent
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
