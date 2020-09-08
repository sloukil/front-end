import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Task } from '../data/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  apiUrl = "http://localhost:8080";

  constructor(private http: HttpClient) { }
 
  public allCurrentTasks : Task[];
   public  getAllTasks() :Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}/taches`);
  }

  getOneTask(id: number){
    return this.http.get<Task>(`${this.apiUrl}/taches/${id}`);
  }

  addTask(desc: string) {

    return this.http.post<Task>(`${this.apiUrl}/taches`, {'description': desc});
  }

  editTask(task: Task) {
    return this.http.put<Task>(`${this.apiUrl}/taches/${task.id}`, {'description': task.description});
  }

  deleteTask(id: number) {
    return this.http.delete<Task>(`${this.apiUrl}/taches/${id}`);
  }
}
