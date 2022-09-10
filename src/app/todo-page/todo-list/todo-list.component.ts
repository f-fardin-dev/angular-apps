import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TODO } from '../models/todos';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Input() todos: TODO[] = [];

  @Output() deleteAction = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  deleteTodo(id: string): void {
    this.deleteAction.emit(id);
  }
}
