import { Component, Inject,} from '@angular/core';
import { Project } from '../_models/Project';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrl: './project-dialog.component.css'
})
export class ProjectDialogComponent {
 

  constructor(@Inject(MAT_DIALOG_DATA) public data: {project:Project}){}

}
