import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MainComponent } from './main.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    MainComponent,
    AboutComponent,
    WorkComponent,
    ContactComponent,
    HeroComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
 