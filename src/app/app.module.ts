import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';


// modules
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
// import { RouterModule } from '@angular/router';

// component
import { AppComponent } from './app.component';
import { ContactFormComponent } from './pages/home/contactform/contactform.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent
    
  ],
  imports: [
    
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LeafletModule,
    CoreModule,
    AppRoutingModule,
    
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
