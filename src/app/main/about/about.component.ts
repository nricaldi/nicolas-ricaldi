import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const aboutSubs = document.querySelectorAll('.about-anim');

    const observer = new IntersectionObserver((entries) => {

      let i = 1;
      entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
          entry.target.classList.add('about-animation'+i);
          i++;
        }
      })
    }) 

    aboutSubs.forEach(aboutSub => {
      observer.observe(aboutSub); 
    })
  }

}
 