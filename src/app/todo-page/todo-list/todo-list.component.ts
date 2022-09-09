import { Component, OnInit, Input } from '@angular/core';
import { TODO } from '../models/todos';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Input() todos: TODO[] = [];

  constructor() {}

  ngOnInit(): void {}
}
