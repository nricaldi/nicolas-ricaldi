import { Component, OnInit } from '@angular/core';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { faDribbble} from '@fortawesome/free-brands-svg-icons';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public faLinkedin = faLinkedin;
  public faGithub = faGithub;
  public faDribbble = faDribbble;
  
  public contactForm: FormGroup;

  constructor(private fb: FormBuilder) { }
 
  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      
      email: ['', [ Validators.minLength(5), 
                    Validators.required, 
                    Validators.email]],

      message: ['', [ Validators.minLength(10),
                      Validators.required]]
    });
  } 


  onSubmit(): void {
    
    if(this.contactForm.valid) {
      console.log(this.contactForm);
      console.log(this.contactForm.value);

      this.contactForm.reset();

    }
  }

}
 