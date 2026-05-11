import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-lose-dialog',
  templateUrl: './lose-dialog.component.html',
  styleUrl: './lose-dialog.component.css'
})
export class LoseDialogComponent {

  constructor(public dialogRef: MatDialogRef<LoseDialogComponent>) {}

  onRunClick(): void {
    this.dialogRef.close();
  }
}
