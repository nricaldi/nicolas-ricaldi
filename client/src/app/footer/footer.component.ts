import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public year = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

  scrollToElement(element : string): void {
    const destination = document.getElementById(element);

    console.log(element)
    if (destination) destination.scrollIntoView({ behavior: 'smooth', block: 'start' }) 
  
  }
}
