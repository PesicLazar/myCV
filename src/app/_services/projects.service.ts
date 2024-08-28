import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { Pic } from '../_models/Pictures';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  //change this to come from a database later
  projects: Project[] = [
    {
      id: 0,
      name: 'Computer Graphics',
      summary: 'OpenGL project',
      description: 'a game were you need to select shapes and then rotate and resize them to fit corretly in the historial building',
      projectLink: 'https://github.com/PesicLazar/computer_graphics',
      tags: [
      Tag.tagJava
      ],
      pictures: [Pic.picGraphic],
    },
    {
      id: 1,
      name: 'mining of massive databases final',
      summary: 'final exam for mining of massive databases subject in Singidunum University',
      description: 'working with database with people from diffrent jobs, salary, experience_level, employment_type',
      projectLink: 'https://github.com/PesicLazar/Mining-of-Massive-Datasets-final/blob/main/ds_salaries.csv',
      tags: [Tag.tagPyhton, Tag.tagExcel
      ],
      pictures: [Pic.picMining],
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
      pictures: [Pic.picAi],
    },
    {
      id: 3,
      name: 'computer-vision-finnal',
      summary: 'final exam for computer vision subject in Singidunum University',
      description: 'image regonition with rock and metal album cover database',
      projectLink: 'https://github.com/PesicLazar?tab=repositories',
      tags: [Tag.tagPyhton, 
      ],
      pictures: [Pic.picVision],
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
