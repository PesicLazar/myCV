import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-win-dialog',
  templateUrl: './win-dialog.component.html',
  styleUrl: './win-dialog.component.css'
})
export class WinDialogComponent {

  constructor(public dialogRef: MatDialogRef<WinDialogComponent>) {}

  onNiceClick(): void {
    this.dialogRef.close();
  }
}