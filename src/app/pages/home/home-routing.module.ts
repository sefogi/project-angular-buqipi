import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CtaComponent } from './cta/cta.component';
import {FeaturesComponent} from './features/features.component'
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '#Producto', component: CtaComponent },
  { path: '#Caracteristicas', component: FeaturesComponent }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
