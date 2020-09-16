import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const projects : Element = document.querySelector('.anim');


    const observer : IntersectionObserver = new IntersectionObserver((entries) => {

      console.log(entries);

      if(entries[0].intersectionRatio > 0) {
        // entries[0].target.style.animation
      }
      
    }) 

    observer.observe(projects);



  }

  showContent(el) { 
    const parentElement = document.querySelector('.'+el);
    const childElement = parentElement.children[0];

    childElement.classList.toggle('show');
  }
}
  