import {Component, OnInit, ViewChild} from '@angular/core';
import {TasksService} from './services/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TasksService]
})
export class AppComponent implements OnInit {

  ngOnInit() {
  }

  constructor() {
  }

}

