import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-5',
  templateUrl: './navbar-five.component.html',
  styleUrls: ['./navbar-five.component.scss']
})
export class NavbarFiveComponent implements OnInit {

  @Input() hideSearch: boolean = true;
  @Input() fixedWidth: boolean = false;
  @Input() sticky: boolean = false;
  @Input() navClass: string = '';
  @Input() ctaButtonClass: string = '';

  showMobileMenu: boolean = false;

  constructor () { }

  ngOnInit(): void {
  }


}