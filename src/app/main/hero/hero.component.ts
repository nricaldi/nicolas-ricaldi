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
        style({ opacity: 0, transform: 'translateY(15px)'}),
        animate(500)
      ])
    ]),
    // trigger('fade2', [
    //   // state(),
    //   transition('* => *', [
    //     style({ opacity: 0, transform: 'translateY(25px)'}),
    //     animate(1500)
    //   ])
    // ]),
    // trigger('fade3', [
    //   // state(),
    //   transition('* => *', [
    //     style({ opacity: 0, transform: 'translateY(25px)'}),
    //     animate(2000)
    //   ])
    // ]),
  // ],
    // trigger('fade', [

    //   transition('* => *', [
        
    //     query(':enter', style({opacity: 0}), {optional: true}),
    //     query(':enter', stagger('300ms', [
    //       animate('1s ease-in', keyframes([
    //         style({opacity: 0, transform: 'translateY(-75px)', offset: 0}),
    //         style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
    //         style({opacity: 1, transform: 'translateY(0px)', offset: 1})
    //       ]))
    //     ]))

    //   ])

    // ])

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