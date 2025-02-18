import { Component, Input, OnInit } from '@angular/core';

// types
import { Feature } from '../home.model';

@Component({
  selector: 'app-home-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent  {

  @Input() features: Feature[] = [
    {
      shapes: ['shape-class-1', 'shape-class-2'], // Clases CSS
      title: 'Feature 1',
      description: 'This is the description for feature 1.',
      image: 'assets/images/feature1.png',
      name: ''
    },
    {
      shapes: ['shape-class-3', 'shape-class-4'],
      title: 'Feature 2',
      description: 'This is the description for feature 2.',
      image: 'assets/images/feature2.png',
      name: ''
    },
  ];
}


