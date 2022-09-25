import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailComponent } from './course-page/course-detail/course-detail.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { SearchLessonsComponent } from './course-page/search-lessons/search-lessons.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TodoPageComponent } from './todo-page/todo-page.component';

const routes: Routes = [
  { path: 'todo-page', component: TodoPageComponent },
  { path: 'course-page', component: CoursePageComponent },
  { path: 'courses/:courseId', component: CourseDetailComponent },
  { path: 'search-lessons', component: SearchLessonsComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
