import { Component } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  selectedFile: File | null = null;
  uploadProgress = 0;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadFile() {
    if (this.selectedFile) {
      this.uploadProgress = 0;
      this.simulateUpload();
    }
  }

  simulateUpload() {
    const interval = setInterval(() => {
      this.uploadProgress += Math.floor(Math.random() * 10);
      if (this.uploadProgress >= 100) {
        clearInterval(interval);
        this.uploadProgress = 100;
      }
    }, 500);
  }
}
