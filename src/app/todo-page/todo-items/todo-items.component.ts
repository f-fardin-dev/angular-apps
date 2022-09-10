import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TODO, TODO_STATUS } from '../models/todos';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css'],
})
export class TodoItemsComponent implements OnInit {
  @Input() todo: TODO = {
    id: '',
    title: '',
    description: '',
    status: TODO_STATUS.IN_PROGRESS,
  };

  @Output() deleteAction = new EventEmitter<string>();
  @Output() toggleAction = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  deleteTodo(id: string): void {
    this.deleteAction.emit(id);
  }

  toggleTodo(): void {
    this.toggleAction.emit(this.todo.id);
  }
}
