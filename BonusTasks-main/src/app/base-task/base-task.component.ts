import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-base-task',
  template: '' // No template needed for the base component
})
export class BaseTaskComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() category: string = '';
  @Input() status: string = 'Pending';
  @Input() deadline: Date = new Date();
}
