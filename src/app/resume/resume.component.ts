import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  downloadPDFWeb() {
    const link = document.createElement('a');
    link.href = 'assets/IT CV.pdf';  //updated* 4.3.2025
    link.download = 'Resume.pdf';
    link.click();
  }
  downloadDocx() {
    const link = document.createElement('a');
    link.href = 'assets/Рекоменд письмо.docx'; 
    link.download = 'Рекоменд письмо.docx';
    link.click();
  }


}
