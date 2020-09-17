import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Project } from '../models/Project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  public project : Project;
  // public frontEnd = this.project.frontEnd;

  constructor(private apiService: ApiService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit(): void {

    const destination = document.getElementById('proj');
    if (destination) destination.scrollIntoView(true);
    

    this._route.params.subscribe((params: Params) =>{
      console.log(params['id']);

      let observable = this.apiService.getProject(params['id']);
      // observable.subscribe(data => this.project = data)
      this.project = observable;
    })
  } 


}