import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';


// modules

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

// component
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LeafletModule,
    
    AppRoutingModule,
    SharedModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
