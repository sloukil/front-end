import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { OneTaskEditorComponent } from './one-task-editor/one-task-editor.component';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
const routes: Routes = [
  {
    path : 'onetask/:id',
    component: OneTaskEditorComponent
  },
  {
    path: 'tasks',
    component: AllTasksComponent,
  },
 
    
    
 
  {path: '', redirectTo: 'tasks', pathMatch: 'full'},
  {path: '**', redirectTo: 'tasks'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
