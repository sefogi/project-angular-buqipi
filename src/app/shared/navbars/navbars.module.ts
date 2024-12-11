import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbCollapseModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

// modules
import { UiModule } from '../ui/ui.module';
import { SharedModule } from '../shared.module';
// component
import { MenuComponent } from './menu/menu.component';
import { NavbarFourComponent } from './navbar-four/navbar-four.component';
import { NavbarOneComponent } from './navbar-one/navbar-one.component';
import { NavbarThreeComponent } from './navbar-three/navbar-three.component';
import { NavbarTwoComponent } from './navbar-two/navbar-two.component';
//import { ModalComponent } from 'src/app/pages/home/modal/modal.component';



@NgModule({
  declarations: [
    MenuComponent,
    NavbarOneComponent,
    NavbarTwoComponent,
    NavbarThreeComponent,
    NavbarFourComponent,
    //ModalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbCollapseModule,
    NgbDropdownModule,
    UiModule
  ],
  exports: [
    MenuComponent,
    NavbarOneComponent,
    NavbarTwoComponent,
    NavbarThreeComponent,
    NavbarFourComponent
    
  ]
})
export class NavbarsModule { }
