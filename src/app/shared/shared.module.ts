import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// modules
import { FooterModule } from './footer/footer.module';
import { HerosModule } from './heros/heros.module';
import { NavbarsModule } from './navbars/navbars.module';
import { UiModule } from './ui/ui.module';
import { WidgetsModule } from './widgets/widgets.module';
//import { ModalComponent } from '../pages/home/modal/modal.component';

@NgModule({
  declarations: [//ModalComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HerosModule,
    NavbarsModule,
    UiModule,
    WidgetsModule,
    FooterModule,
    //ModalComponent,
  ]
})
export class SharedModule { }
