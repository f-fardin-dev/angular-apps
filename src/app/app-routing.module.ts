import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursePageComponent } from './course-page/course-page.component';
import { TodoPageComponent } from './todo-page/todo-page.component';

const routes: Routes = [
  { path: 'todo-page', component: TodoPageComponent },
  { path: 'course-page', component: CoursePageComponent },
  { path: '', redirectTo: 'todo-page', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
