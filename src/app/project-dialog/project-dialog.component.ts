import { Component, Inject } from '@angular/core';
import { Project } from '../_models/Project';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrl: './project-dialog.component.css'
})
export class ProjectDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { project: Project },
    private dialogRef: MatDialogRef<ProjectDialogComponent>,
    private router: Router
  ) {}

  goToProject() {
    const action = this.data.project.customButtonAction;

    // Close dialog before navigating
    this.dialogRef.close();

    if (!action) return;

    if (action.startsWith('/')) {
      // Angular internal route
      this.router.navigate([action]);
    } else if (action.startsWith('http')) {
      // External URL
      window.open(action, '_blank');
    } else {
      console.warn('Unknown action format:', action);
    }
  }
}
