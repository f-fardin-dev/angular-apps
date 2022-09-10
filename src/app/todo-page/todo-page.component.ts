import { Component, OnInit } from '@angular/core';
import { localStorageHelper } from 'src/utils/localStorageHelper';
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

  ngOnInit(): void {
    const localStorageTodos = localStorageHelper.getItem<TODO[]>('ngTodos');
    if (localStorageTodos) {
      this.todos = localStorageTodos;
    }
  }

  addNewTodo(): void {
    this.todos.push({ title: this.title, description: this.description });
    localStorageHelper.storeItem('ngTodos', this.todos);
    this.title = '';
    this.description = '';
  }
}
