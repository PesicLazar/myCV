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
      name: 'Arena mini game',
      summary: 'fun original game i made on my own',
      description:
        'Randomly generated heroes battle it out in a mini arena, who will you bet on?',
      projectLink: '',
      tags: [Tag.tagAngular, Tag.tagTypescript],
      pictures: [Pic.picArena],
      customButtonLabel: 'Play',
      customButtonAction: '/minigame'
    },
    {
      id: 1,
      name: 'Computer Graphics',
      summary: 'OpenGL project',
      description:
        'A game were you need to select shapes and then rotate and resize them to fit corretly in the historial building',
      projectLink: 'https://github.com/PesicLazar/computer_graphics',
      tags: [Tag.tagJava],
      pictures: [Pic.picGraphic],
    },
    {
      id: 2,
      name: 'Mining of Massive Databases',
      summary:
        'Final exam for Mining of Massive Databases subject in Singidunum University',
      description:
        'working with database of people from diffrent jobs, salaries, experience levels, employment types',
      projectLink:
        'https://github.com/PesicLazar/Mining-of-Massive-Datasets-final/blob/main/ds_salaries.csv',
      tags: [Tag.tagPyhton, Tag.tagExcel],
      pictures: [Pic.picMining],
    },
    {
      id: 3,
      name: 'AI Final',
      summary: 'Final exam for AI subject in Singidunum University',
      description: '',
      projectLink: 'https://github.com/PesicLazar?tab=repositories',
      tags: [Tag.tagPyhton, Tag.tagExcel],
      pictures: [Pic.picAi],
    },
    {
      id: 4,
      name: 'Computer Vision Final',
      summary:
        'Final exam for Computer Vision subject in Singidunum University',
      description:
        'Image regonition with "rock" and "metal" album covers databases',
      projectLink: 'https://github.com/PesicLazar?tab=repositories',
      tags: [Tag.tagPyhton],
      pictures: [Pic.picVision],
    },
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
