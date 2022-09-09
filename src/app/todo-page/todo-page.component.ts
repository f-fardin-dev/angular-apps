import { Component, OnInit } from '@angular/core';
import { TODO } from './models/todos';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css'],
})
export class TodoPageComponent implements OnInit {
  todos: TODO[] = [];

  constructor() {}

  ngOnInit(): void {}
}
