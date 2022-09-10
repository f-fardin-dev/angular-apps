import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TODO } from '../models/todos';

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
  };

  @Output() deleteAction = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  deleteTodo(id: string): void {
    this.deleteAction.emit(id);
  }
}
