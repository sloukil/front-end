import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../data/task';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-alltasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent implements OnInit{
  current: string;
  addingTask = false;
  enableEdit = false;
  description: string;
   allTasks : Task[] ;
  title = 'my-app';

  @ViewChild('myDiv') myDiv: ElementRef;
  constructor (private ts:TasksService, public dialog: MatDialog, private router: Router){}

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
navigateToTask(i : number){
  this.router.navigate(['/onetask/'+this.allTasks[i].id]);
}

}