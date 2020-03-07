import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Task} from '../model/task';

@Injectable()
export class TasksService {

  private tasksDone: Array<Task> = [];
  private tasksList: Array<Task> = [];

  taskListObs = new BehaviorSubject<Array<Task>>([]);
  taskDoneObs = new BehaviorSubject<Array<Task>>([]);

  constructor() {
    this.tasksList = [
      {name: 'Nauka', created: new Date()},
      {name: 'Siłownia', created: new Date()},
      {name: 'Programowanie', created: new Date()}];
    this.taskListObs.next(this.tasksList);
  }

  addTask(task: Task) {
    this.tasksList.push(task);
    this.taskListObs.next(this.tasksList);
  }

  remove(task: Task) {
    this.tasksList = this.tasksList.filter(e => e !== task);
    this.taskListObs.next(this.tasksList);
  }

  done(task: Task) {
    this.tasksDone.push(task);
    this.remove(task);
    this.taskDoneObs.next(this.tasksDone);
  }

  getTaskListObs(): Observable<Array<Task>> {
    return this.taskListObs.asObservable();
  }

  getTaskDoneObs(): Observable<Array<Task>> {
    return this.taskDoneObs.asObservable();
  }

}
