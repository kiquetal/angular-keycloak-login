import {Component, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-profile-dialog',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
    JsonPipe
  ],
  templateUrl: './profile-dialog.component.html',
  styleUrl: './profile-dialog.component.css'
})
export class ProfileDialogComponent {

  constructor(private dialogRef:MatDialogRef<ProfileDialogComponent> ,
              @Inject(MAT_DIALOG_DATA ) public data: any) {}



closeDialog() {
    this.dialogRef.close();
}
}
