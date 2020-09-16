import { Renderer2, Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  constructor( private _renderer2: Renderer2, @Inject(DOCUMENT) private _document: Document) { }

  ngOnInit(): void {

    // const projects = document.querySelector('.anim');
    const projects = document.querySelectorAll('.anim');


    const observer = new IntersectionObserver((entries) => {

      let i = 1;

      entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
          entry.target.classList.add('animation'+i);
          i++;
        }
        else {
          entry.target.classList.remove('animation'+i);
        }
      })

      i = 1;
      
      
    }) 

    projects.forEach(project => {
      observer.observe(project); 
    })

  }

  showContent(el) { 
    const parentElement = document.querySelector('.'+el);
    const childElement = parentElement.children[0];

    childElement.classList.toggle('show');
  }
}
  