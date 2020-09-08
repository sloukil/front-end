import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TasksService } from '../services/tasks.service';
import { Task } from '../data/task';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent {
 public description : string;
  constructor( private ts1 : TasksService,
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public id: number) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  editTask(){
    this.ts1.editTask(new Task(this.id, this.description)).subscribe((data) => {
    this.updateCurrentTasks();
    this.dialogRef.close() ; });

  }

  updateCurrentTasks(){
     this.ts1.allCurrentTasks.find( e => e.id === this.id).description = this.description;
  }
}
