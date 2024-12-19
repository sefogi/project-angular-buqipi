import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';



@Component({
  selector: 'app-home-sectionend',
  templateUrl: './sectionend.component.html',
  styleUrls: ['./sectionend.component.scss']
})
export class SectionendComponent implements OnInit {



  constructor () { }

  ngOnInit(): void {
    AOS.init();
  }

}