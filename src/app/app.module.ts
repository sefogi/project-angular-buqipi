import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';


// modules
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

// component
import { AppComponent } from './app.component';
// import { ContactFormComponent } from './pages/home/contactform/contactform.component';
// import { PoliticasComponent } from './pages/home/politicas/politicas.component'
// import { TycComponent } from './pages/home/tyc/tyc.component';
// import { PoliticasPrivacidadComponent } from './pages/home/politicaprivacidad/politicaprivacidad.component';
// import { PoliticasCookiesComponent } from './pages/home/politicascookies/politicascookies.component';

@NgModule({
  declarations: [
    AppComponent,
    // ContactFormComponent,
    // PoliticasComponent,
    // TycComponent,
    // PoliticasPrivacidadComponent,
    // PoliticasCookiesComponent,
    
  ],
  imports: [
    
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LeafletModule,
    CoreModule,
    AppRoutingModule,
    SharedModule
  ],
  // exports:[ContactFormComponent],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
