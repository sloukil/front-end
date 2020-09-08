import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TasksService } from './services/tasks.service';
import { Task } from './data/task';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  current: string;
  addingTask = false;
  enableEdit = false;
  description: string;
   allTasks : Task[] ;
  title = 'my-app';

  @ViewChild('myDiv') myDiv: ElementRef;
  constructor (private ts:TasksService, public dialog: MatDialog){}

  ngOnInit(){
    console.log(this.ts);
    this.ts.getAllTasks().subscribe(
      (data) => {this.ts.allCurrentTasks = data;
        this.allTasks = this.ts.allCurrentTasks;
        console.log(this.ts.allCurrentTasks)},
      (error)=> (console.log(error)));
      
     
  }
  addTask(){
    console.log(this.description);
    this.ts.addTask(this.description).subscribe((data : any) => (this.ts.allCurrentTasks.push(data)));
  }

  deleteTask(i:number){
    this.ts.deleteTask(this.allTasks [i].id).subscribe(data =>
     this.allTasks.splice(i,1));
  }
  openDialog(i : number): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '250px',
      data: this.allTasks[i].id
    });
}
}
