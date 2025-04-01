import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  downloadPDFWeb() {
    const link = document.createElement('a');
    link.href = 'assets/IT CV.pdf'; 
    link.download = 'Resume.pdf';
    link.click();
  }

}
