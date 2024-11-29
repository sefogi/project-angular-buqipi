import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CtaComponent } from './cta/cta.component';
import {FeaturesComponent} from './features/features.component'
import {PricingComponent} from './pricing/pricing.component'
import { ContactFormComponent } from './contactform/contactform.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '#Producto', component: CtaComponent },
  { path: '#Caracteristicas', component: FeaturesComponent },
  { path: '#Precios', component: PricingComponent },
  {path: '/Contact', component: ContactFormComponent}

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
