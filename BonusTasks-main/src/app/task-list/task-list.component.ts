import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {TaskItemComponent} from '../task-item/task-item.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  imports: [
    FormsModule,
    NgForOf,
    TaskItemComponent,
    NgIf,
    RouterLink
  ],
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks = [
    { id: 1, title: 'Task 1', description: 'закончить бонус таск по вебке', category: 'Work', status: 'Pending', deadline: new Date() },
    { id: 2, title: 'Task 2', description: '', category: 'поехать в медео', status: 'Pending', deadline: new Date() },
    { id: 3, title: 'Task 3', description: 'защита 6 лаб', category: 'Study', status: 'Pending', deadline: new Date() }
  ];

  newTask = { title: '', description: '', category: 'Work', deadline: new Date() };
  isEditing = false;
  editedTaskId: number | null = null;

  onTaskCompleted(taskId: number) {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      task.status = 'Completed';
    }
  }

  addTask() {
    if (this.newTask.title && this.newTask.description) {
      const newId = this.tasks.length > 0 ? Math.max(...this.tasks.map(t => t.id)) + 1 : 1;
      this.tasks.push({
        id: newId,
        title: this.newTask.title,
        description: this.newTask.description,
        category: this.newTask.category,
        status: 'Pending',
        deadline: this.newTask.deadline
      });
      this.resetForm();
    }
  }

  editTask(taskId: number) {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      this.isEditing = true;
      this.editedTaskId = taskId;
      this.newTask = { ...task };
    }
  }

  updateTask() {
    if (this.editedTaskId !== null) {
      const task = this.tasks.find(t => t.id === this.editedTaskId);
      if (task) {
        task.title = this.newTask.title;
        task.description = this.newTask.description;
        task.category = this.newTask.category;
        task.deadline = this.newTask.deadline;
        this.resetForm();
      }
    }
  }

  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter(t => t.id !== taskId);
  }

  resetForm() {
    this.newTask = { title: '', description: '', category: 'Work', deadline: new Date() };
    this.isEditing = false;
    this.editedTaskId = null;
  }
}
