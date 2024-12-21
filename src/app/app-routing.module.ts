import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './pages/home/contactform/contactform.component';
import { PoliticasComponent } from './pages/home/politicas/politicas.component';
import { TycComponent } from './pages/home/tyc/tyc.component';
import { PoliticasPrivacidadComponent } from './pages/home/politicaprivacidad/politicaprivacidad.component';
import { PoliticasCookiesComponent } from './pages/home/politicascookies/politicascookies.component';
import { ContactPageComponent } from './pages/home/contactpage/contactpage.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '#Producto',
    
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
    component:ContactPageComponent
  },
  {
    path: 'Politicas',
    component:PoliticasComponent
  },
  {
    path: 'Tyc',
    component:TycComponent
  },
  {
    path: 'PoliticasPrivacidad',
    component:PoliticasPrivacidadComponent
  },
  {
    path: 'PoliticasCookies',
    component:PoliticasCookiesComponent
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
