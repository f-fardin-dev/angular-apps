import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { TodoItemsComponent } from './todo-page/todo-items/todo-items.component';
import { TodoListComponent } from './todo-page/todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { CoursePageComponent } from './course-page/course-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoPageComponent,
    TodoItemsComponent,
    TodoListComponent,
    CoursePageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
