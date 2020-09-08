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
export class AppComponent  {
  
}
