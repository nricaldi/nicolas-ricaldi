import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isOpen: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }


  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  scrollToElement(element : string): void {
    // console.log(element);
    const destination = document.getElementById(element);
    const navHeight = document.getElementById('nav').offsetHeight

    const y = destination.getBoundingClientRect().top + window.pageYOffset - navHeight;

    if(this.isOpen){
      setTimeout(function(){ 
        if (destination) destination.scrollIntoView({ behavior: 'smooth', block: 'start' }) 
      }, 500);
    } else {
      if (destination) destination.scrollIntoView({ behavior: 'smooth', block: 'start' }) 
    }

    this.isOpen = false;
  }

}
