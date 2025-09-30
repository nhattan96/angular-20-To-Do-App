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
    { id: 1, title: 'Wake up', done: true },
    { id: 2, title: 'Drink Water', done: true },
    { id: 3, title: 'Study', done: false },
    { id: 4, title: 'Go to work', done: false },
  ];

  onAddTask() {
    const taskName = this.toDoForm.value.taskName?.trim();
    if (taskName) {
      this.tasks = [{ id: this.tasks.length + 1, title: taskName, done: false }, ...this.tasks];
      this.toDoForm.reset();
    }
  }

  onDeleteTask(id: number) {
    if (confirm('Are you sure to delete this task?')) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    }
  }

  onDoneTask(id: number) {
    this.tasks = this.tasks.map((task) => (task.id === id ? { ...task, done: !task.done } : task));
  }
}
