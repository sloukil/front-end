import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../data/task';
import { TasksService } from '../services/tasks.service';
@Component({
  selector: 'app-one-task-editor',
  templateUrl: './one-task-editor.component.html',
  styleUrls: ['./one-task-editor.component.css']
})
export class OneTaskEditorComponent implements OnInit {
    desc : string;
     currentTask : Task;
     id : string;
  constructor(private route: ActivatedRoute, private ts2: TasksService,  private router: Router) { }

  ngOnInit(): void {
   this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.ts2.getOneTask(+this.id).subscribe((data) =>
    {this.currentTask = data;
      this.desc = this.currentTask.description;},
    (error)=> (console.log(error)));
}
  editTask(){
    this.ts2.editTask(new Task(+this.id,this.desc)).subscribe(
      (data)=> console.log(data)
    );
  }

  deleteTask(){
    this.ts2.deleteTask(+this.id).subscribe((data)=>
      this.router.navigate(["tasks"])
    );
  }
}
