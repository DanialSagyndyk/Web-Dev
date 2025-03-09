import { Component, EventEmitter, Output } from '@angular/core';
import { BaseTaskComponent } from '../base-task/base-task.component';
import {DatePipe, NgIf} from '@angular/common';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  imports: [
    DatePipe,
    NgIf
  ],
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent extends BaseTaskComponent {
  @Output() taskCompleted = new EventEmitter<void>();

  markAsCompleted() {
    this.status = 'Completed';
    this.taskCompleted.emit();
  }
}
