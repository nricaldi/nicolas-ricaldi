import { Component, OnInit } from '@angular/core';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { faDribbble} from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faDribbble = faDribbble;


  constructor() { }

  ngOnInit(): void {
  }

}
