import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Task} from '../model/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  url = 'http://localhost:8080/task/';

  constructor(private http: HttpClient) { }

  getTask() {
    return this.http.get<Task[]>(this.url);
  }

  newTask(tag: Task) {
    return this.http.post<void>(this.url, tag);
  }

  deleteTask(taskId: number) {
    return this.http.delete<void>(this.url + taskId);
  }

  updateTask(task: Task) {
    return this.http.put(this.url, task);
  }
}
