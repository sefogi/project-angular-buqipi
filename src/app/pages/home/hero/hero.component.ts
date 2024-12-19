import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay, SwiperOptions } from 'swiper';

// types
import { Slide } from '../heros/heros.model';

// data
import { SLIDES } from '../heros/data';


// install Swiper modules
SwiperCore.use([Autoplay]);

@Component({
  selector: 'app-home-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  config: SwiperOptions = {};
  sliderItems: Slide[] = [...SLIDES]

  constructor () { }

  ngOnInit(): void {
    this.config = {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 0,
      autoplay: {
        delay: 5000
      },
      breakpoints: {
        576: { slidesPerView: 1.2 },
        768: { slidesPerView: 1 }
      },
      roundLengths: true
    }
  }

}
