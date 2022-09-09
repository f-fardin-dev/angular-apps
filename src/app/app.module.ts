import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { TodoItemsComponent } from './todo-page/todo-items/todo-items.component';
import { TodoListComponent } from './todo-page/todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoPageComponent,
    TodoItemsComponent,
    TodoListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
