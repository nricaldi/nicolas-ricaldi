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

  // public contactForm: FormGroup = new FormGroup({
  //   name : new FormControl,
  //   email : new FormControl,
  //   message : new FormControl
  // })


  constructor(private fb: FormBuilder) { }
 
  ngOnInit(): void {
    this.initializeForm();
  }

  // initializeForm(): void {
  //   this.contactForm = this.fb.group({
  //     name: '',
  //     email: '',
  //     message: ''
  //   });
  // }

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
    console.log(this.contactForm);
  }

  

  // send() {
  //   console.log(this.contactForm.value.name);
  //   console.log(this.contactForm.value.email);
  //   console.log(this.contactForm.value.message);
    
    
  // }

  /* *************************

    form validations 
    form = not blank
    name = min length 1
    email = valid email
    message = min length 10

    disable button when not valid

  ************************* */


  validateForm() {

  }
}
 