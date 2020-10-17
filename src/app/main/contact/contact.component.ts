import { Component, OnInit } from '@angular/core';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { faDribbble} from '@fortawesome/free-brands-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ReCaptchaV3Service } from 'ng-recaptcha';

import { ApiService } from '../../api.service';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public faLinkedin = faLinkedin;
  public faGithub = faGithub;
  public faDribbble = faDribbble;
  public faCheckCircle = faCheckCircle

  public contactForm: FormGroup;

  public success: boolean;
  public token: string;

  constructor(private fb: FormBuilder, private apiService: ApiService, private recaptchaV3Service: ReCaptchaV3Service,) { }
 
  ngOnInit(): void {
    this.initializeForm();
  }

  public initializeForm(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],

      subject: ['', Validators.required],
      
      email: ['', [ Validators.minLength(5), 
                    Validators.required, 
                    Validators.email]],

      message: ['', [ Validators.minLength(10),
                      Validators.required]]
    });
  } 

  public onSubmit(): void {

    if(this.contactForm.valid) {

      this.recaptchaV3Service.execute('importantAction')
        .subscribe((token) => {
          this.setToken(token);

          let observable = this.apiService.sendMail(this.contactForm.value, this.token);
          observable.subscribe( 
            res => {
              this.success = res.success;
              if(this.success) {
                this.showSuccess();
                this.contactForm.reset();
              }
            },
            err => console.log(err),
          );
        })
    }
  }

  private setToken(token): void {
    this.token = token;
  }

  private showSuccess(): void {
    const msg = document.querySelector('.success-msg');
    // console.log(msg);

    msg.classList.add('show');
    setTimeout(function(){ msg.classList.remove('show'); }, 3000);
  }
}