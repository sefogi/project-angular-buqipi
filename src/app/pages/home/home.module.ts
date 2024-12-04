import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { SwiperModule } from 'swiper/angular';


// module
import { NavbarsModule } from 'src/app/shared/navbars/navbars.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { UiModule } from 'src/app/shared/ui/ui.module';
import { HomeRoutingModule } from './home-routing.module';

// component
import { AccountPagesComponent } from './account-pages/account-pages.component';
import { CtaComponent } from './cta/cta.component';
import { FeaturesComponent } from './features/features.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home.component';
import { InnerPagesComponent } from './inner-pages/inner-pages.component';
import { LandingPagesComponent } from './landing-pages/landing-pages.component';
import {HeroElevenComponent} from './heros/hero-eleven/hero-eleven.component'
import { TableComponent } from './table/table.component';
import {PricingComponent} from './pricing/pricing.component'
import { SectionendComponent } from './sectionend/sectionend.component';
import { TestimonialComponent } from './testimonial/testimonial.component';


@NgModule({
  declarations: [
    TestimonialComponent,
    HomeComponent,
    HeroComponent,
    HeroElevenComponent,
    FeaturesComponent,

    FooterComponent,
    CtaComponent,
    TableComponent,
    PricingComponent,
    SectionendComponent,
    AccountPagesComponent,
    InnerPagesComponent,
    LandingPagesComponent,

  ],
  imports: [
    CommonModule,
    NgxTypedJsModule,
    SwiperModule,
    NavbarsModule,
    UiModule,
    HomeRoutingModule,
    SharedModule
    
    
  ]
})
export class HomeModule { }
