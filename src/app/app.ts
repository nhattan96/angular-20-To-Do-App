import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './components/to-do/to-do';
import { UserComponent } from './components/user/user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoComponent, UserComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('to-do-app');
}
