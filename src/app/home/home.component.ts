import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  featuredProjects: Project[] = [];

  constructor(private projectService:ProjectsService){

  }
  ngOnInit(): void {
    this.featuredProjects.push(this.projectService.GetProjectById(0));
    this.featuredProjects.push(this.projectService.GetProjectById(1));
    this.featuredProjects.push(this.projectService.GetProjectById(2));
  }

}

//implimet later into html 