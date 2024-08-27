import { Component, Input } from '@angular/core';
import { Project } from '../_models/Project';
import { MatDialog } from '@angular/material/dialog';
import { ProjectsService } from '../_services/projects.service';
import { ProjectDialogComponent } from '../project-dialog/project-dialog.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  @Input() project = {} as Project;

  constructor(
    public dialog: MatDialog,
    private projectsService: ProjectsService
  ) {}
  OpenProjectDialog(id: number) {
    const project = this.projectsService.GetProjectById(this.project.id);
    this.dialog.open(ProjectDialogComponent, {
      width: '400px',
      data: { project },
    });
  }
}
