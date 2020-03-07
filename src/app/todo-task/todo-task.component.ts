import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {TasksService} from '../services/tasks.service';
import {Task} from '../model/task';


@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TodoTaskComponent implements OnInit {

  tasksList: Array<Task> = [];

  constructor(private taskService: TasksService) {
    this.taskService.getTaskListObs().subscribe((tasks: Array<Task>) => {
      this.tasksList = tasks;
    });
  }

  ngOnInit() {
  }

  remove(task: Task) {
    this.taskService.remove(task);
  }

  done(task: Task) {
    this.taskService.done(task);
  }

  getColor(): string {
    return this.tasksList.length >= 5 ? 'red' : 'green';
  }
}
