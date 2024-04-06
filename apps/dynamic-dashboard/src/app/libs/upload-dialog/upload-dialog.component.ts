import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-upload-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatFormFieldModule,
    FormsModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './upload-dialog.component.html',
  styleUrl: './upload-dialog.component.css',
})
export class UploadDialogComponent {
  documents: any;
  uploadType = 'file';
  dbUrl = '';

  fileList = [];
  formatList = ['.json'];

  isLoading = false;

  constructor(private dialogRef: MatDialogRef<UploadDialogComponent>) {}

  /**
   *
   * @param event Event from file input element
   */
  uploadDocument(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const fileList: FileList | null = inputElement.files;
    if (fileList) {
      for (let index = 0; index < fileList.length; index++) {
        const fileName = fileList[index].name;
        const fileExtension = fileList[index].name.substring(
          fileList[index].name.lastIndexOf('.'),
          fileList[index].name.length
        );
        const fileSupported = this.formatList.includes(fileExtension);
        if (!fileSupported) {
          return;
        } else {
          this.documents = {
            file: fileList[index],
            name: fileList[index].name,
            isNewUpload: true,
            key: undefined,
          };
        }
      }
    }
  }

  generateDashboard(): void {
    this.isLoading = true;

    setTimeout(() => {
      this.dialogRef.close({ isDashboard: true });
      this.isLoading = false;
    }, 3000);
    console.log('Generate Dashboard');
  }

  closeDialog() {
    this.dialogRef.close({ isDashboard: false });
  }
}
