import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showContent(el) { 
    const parentElement = document.querySelector('.'+el);
    const childElement = parentElement.children[0];

    childElement.classList.toggle('show');
  }
}
