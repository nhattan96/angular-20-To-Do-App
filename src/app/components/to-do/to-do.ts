import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'to-do',
  templateUrl: './to-do.html',
  styleUrls: ['./to-do.css'],
  imports: [ReactiveFormsModule],
})
export class TodoComponent {
  toDoForm = new FormGroup({
    taskName: new FormControl(''),
  });

  tasks = [
    { id: 1, title: 'Wake up' },
    { id: 2, title: 'Drink Water' },
    { id: 3, title: 'Study' },
    { id: 4, title: 'Go to work' },
  ];

  onAddTask() {
    const taskName = this.toDoForm.value.taskName?.trim();
    if (taskName) {
      this.tasks = [{ id: this.tasks.length + 1, title: taskName }, ...this.tasks];
      this.toDoForm.reset();
    }
  }

  onDeleteTask(id: number) {
    if (confirm('Are you sure to delete this task?')) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    }
  }
}
