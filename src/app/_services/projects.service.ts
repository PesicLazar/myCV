import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  //change this to come from a database later
  projects: Project[] = [
    {
      id: 0,
      name: 'Flying Pig',
      summary: 'small simple game',
      description: '',
      projectLink: '',
      tags: [Tag.tagUnity, Tag.tagCsharp],
      pictures: [],
    },
    {
      id: 1,
      name: 'computer-vision-finnal',
      summary: 'final exam for computer vision subject in Singidunum University',
      description: 'image regonition with rock and metal album cover database',
      projectLink: 'https://github.com/PesicLazar?tab=repositories',
      tags: [Tag.tagPyhton, 
      ],
      pictures: [],
    },
    {
      id: 2,
      name: 'Ai Final',
      summary: 'final exam for AI subject in Singidunum University',
      description: '',
      projectLink: 'https://github.com/PesicLazar?tab=repositories',
      tags: [
        Tag.tagPyhton,
        Tag.tagExcel,
      ],
      pictures: [],
    },
    {
      id: 3,
      name: 'Some Site',
      summary: 'A description of some site',
      description: '',
      projectLink: '',
      tags: [
        Tag.tagAngular,
        Tag.tagTypescript,
        Tag.tagRxJS,
        Tag.tagMongoDB,
      ],
      pictures: [],
    }
  ];

  constructor() {}

  GetProjects() {
    return this.projects;
  }
  GetProjectById(id: number): Project {
    let project = this.projects.find((project) => project.id === id);
    //not necesery but just in case
    if (project === undefined) {
      throw new TypeError('there isnt a project with that id' + id);
    }
    return project;
  }
}
