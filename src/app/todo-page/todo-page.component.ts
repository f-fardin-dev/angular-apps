import { Component, OnInit } from '@angular/core';
import { TODO } from './models/todos';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css'],
})
export class TodoPageComponent implements OnInit {
  title: string = '';
  description: string = '';

  todos: TODO[] = [];

  constructor() {}

  ngOnInit(): void {}

  addNewTodo(): void {
    this.todos.push({ title: this.title, description: this.description });
    this.title = '';
    this.description = '';
  }
}
