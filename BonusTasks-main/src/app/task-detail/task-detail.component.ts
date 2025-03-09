import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseTaskComponent } from '../base-task/base-task.component';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  imports: [
    DatePipe
  ],
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent extends BaseTaskComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
    const taskId = this.route.snapshot.paramMap.get('id');
    this.title = `Task ${taskId}`;
    this.description = `Description for Task ${taskId}`;
    this.category = 'Work';
    this.status = 'Pending';
    this.deadline = new Date();
  }
}
