import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate, query, stagger, keyframes } from '@angular/animations';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  animations: [
    trigger('fade', [
      // state(),
      transition('* => *', [
        style({ opacity: 0, transform: 'translateY(25px)'}),
        animate(500)
      ])
    ]),

  ]
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollToElement(element : string): void {
    console.log(element);
    const destination = document.querySelector("#"+element)
    if (destination) destination.scrollIntoView({ behavior: 'smooth', block: 'start' }) 
  }

}