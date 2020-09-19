import { Component, OnInit } from '@angular/core';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { faDribbble} from '@fortawesome/free-brands-svg-icons';
// import { faCheck } from '@fortawesome/free-solid-svg-icons';
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
  // constructor(private fb: FormBuilder) { }
 
  ngOnInit(): void {
    this.initializeForm();
  }

  public initializeForm(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      
      email: ['', [ Validators.minLength(5), 
                    Validators.required, 
                    Validators.email]],

      message: ['', [ Validators.minLength(10),
                      Validators.required]]
    });
  } 


  // private executeImportantAction(): void {
  //   this.recaptchaV3Service.execute('importantAction')
  //     // .subscribe((token) => this.setToken(token));
  //     // .subscribe((token) => console.log(token));
  // }

  public onSubmit(): void {

    if(this.contactForm.valid) {
      this.recaptchaV3Service.execute('importantAction')
        .subscribe((token) => {
          this.setToken(token);

          let observable = this.apiService.sendMail(this.contactForm.value, this.token);
          observable.subscribe( 
            res => {
              this.success = res.google_response.success;
              if(this.success) {
                this.showSuccess();
                this.contactForm.reset();
              }
            },
            err => console.log(err),
          );
        })

      // let token = this.token;
      // console.log(token);

      // let observable = this.apiService.sendMail(this.contactForm.value, this.token);
      // observable.subscribe( 
      //   res => this.success = res.msg,
      //   err => console.log(err),
      // );

      // this.contactForm.reset();

    }
  }
  private setToken(token): void {
    this.token = token;
  }

  private showSuccess(): void {
    const msg = document.querySelector('.success-msg');
    msg.classList.add('show');
    setTimeout(function(){ msg.classList.remove('show'); }, 3000);
  }

}