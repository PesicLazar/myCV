import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  downloadPDFIoT() {
    const link = document.createElement('a');
    link.href = 'assets/IoTCV.pdf'; 
    link.download = 'Resume.pdf';
    link.click();
  }
  downloadPDFWeb() {
    const link = document.createElement('a');
    link.href = 'assets/IoTCV.pdf'; 
    link.download = 'Resume.pdf';
    link.click();
  }
  downloadPDFGame() {
    const link = document.createElement('a');
    link.href = 'assets/IoTCV.pdf'; 
    link.download = 'Resume.pdf';
    link.click();
  }

}
