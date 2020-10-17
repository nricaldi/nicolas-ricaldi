import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Email } from './models/Email';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  projects = [
    {
      'title': 'INI Services',
      'description':"Developed from concept to completion for a home improvement company. Used javascript for all animations. Used Ajax to prevent page reload when submitting form. Django handles contact form submission and sends it to the client's email and the review creation. Used responsive design",
      'img': '../../assets/img/ini.png',
      'frontEnd': ['HTML', 'CSS', 'JavaScript', 'GSAP', 'AJAX', 'JQUERY'],
      'backEnd': ['Python', 'Django'],
      'deployment': ['Linode Linux cloud server'],
      'demoLink': 'https://www.iniservices.com/',
      'codeLink': 'https://github.com/nricaldi/ini'
    },

    {
      'title': 'Travel Buddy',
      'description':"Responsive travel planner app where users can register and login, they can create a trip with start date and end date, view other users trips and join other users trips.",
      'img': '../../assets/img/travel-buddy.png',
      'frontEnd': ['HTML', 'CSS', 'JavaScript'],
      'backEnd': ['Python', 'Django'],
      'deployment': ['AWS EC2 server'],
      'demoLink': 'http://18.223.149.119/',
      'codeLink': 'https://github.com/nricaldi/travel-buddy'
    },

    {
      'title': 'Movie Rater',
      'description':"Front end app using angular. Users can create, update and delete movies. Users can also rate movies and view the average rating. Back end api created using Django REST framework. Users can create, update and delete movies. Users can also rate movies and view the average rating.",
      'img': '../../assets/img/movie-rater.png',
      'frontEnd': ['Angular'],
      'backEnd': ['Python', 'Django', 'Django REST framework'],
      'deployment': ['Firebase', 'Heroku'],
      'demoLink': 'https://movie-rater-bb900.web.app/auth',
      'codeLink': 'https://github.com/nricaldi/movieRater'
    },

    {
      'title': 'OSA',
      'description':"Designed the site for a local martial arts school. Used responsive design",
      'img': '../../assets/img/osa.png',
      'frontEnd': ['HTML', 'CSS', 'JavaScript', 'JQUERY'],
      'backEnd': ['None'],
      'deployment': ['Github pages'],
      'demoLink': 'https://nricaldi.github.io/osa/',
      'codeLink': 'https://github.com/nricaldi/osa'
    },





  ]

  // baseUrl = 'http://127.0.0.1:8000/';
  baseUrl = 'https://nm-email-api.herokuapp.com/';
  
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private _http: HttpClient) { }

  getProject(_id: number){
    const proj = this.projects[_id-1];
    return proj;
  }

  sendMail(email: Email, token: string) : Observable<any>{
    return this._http.post(`${this.baseUrl}send/${token}`, email, {headers: this.headers});
  }



  // sendMail(email: Email){
  //   console.log('hello from service');
  //   console.log(email)
  //   // return this._http.post(`${this.baseUrl}send`, email);
  // }


}
 