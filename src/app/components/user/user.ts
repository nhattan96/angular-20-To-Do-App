import { Component } from '@angular/core';

@Component({
  selector: 'user',
  templateUrl: './user.html',
})
export class UserComponent {
  user: any;

  constructor() {
    this.getUser();
  }

  async getUser() {
    const response = await fetch('https://dummyjson.com/users/1');
    this.user = await response.json();
  }
}
