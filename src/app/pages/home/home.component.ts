import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import feather from 'feather-icons';

// types
import {  Feature } from './home.model';

// data
import {  features} from './data';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // landingDemos: Demo[] = [];
  // pagesDemos: Demo[] = [];
  // authDemos: Demo[] = [];
  features: Feature[] = [];

  constructor (private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Buqipi | La solución que necesitas, prueba ahora gratis");
    this._fetchData();
  }

  ngAfterViewInit() {
    // feather icon
    feather.replace();
  }

  _fetchData(): void {
    // this.landingDemos = LANDINGDEMOS;
    // this.pagesDemos = PAGESDEMOS;
    // this.authDemos = AUTHDEMOS;
    this.features = features;
  }

}
