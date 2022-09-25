import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { TodoItemsComponent } from './todo-page/todo-items/todo-items.component';
import { TodoListComponent } from './todo-page/todo-list/todo-list.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { CourseCardListComponent } from './course-page/course-card-list/course-card-list.component';
import { MessagesComponent } from './messages/messages.component';
import { HomeComponent } from './home/home.component';
import { CourseDetailComponent } from './course-page/course-detail/course-detail.component';
import { CourseDialogComponent } from './course-page/course-dialog/course-dialog.component';
import { LoginComponent } from './login/login.component';
import { SearchLessonsComponent } from './course-page/search-lessons/search-lessons.component';
import { LessonComponent } from './course-page/lesson/lesson.component';

import { LoadingService } from './loading/loading.service';
import { MessagesService } from './messages/messages.service';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { LoadingComponent } from './loading/loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SafeUrlPipe } from './common/safe-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SafeUrlPipe,
    TodoPageComponent,
    TodoItemsComponent,
    TodoListComponent,
    CoursePageComponent,
    CourseCardListComponent,
    LoadingComponent,
    MessagesComponent,
    HomeComponent,
    CourseDetailComponent,
    CourseDialogComponent,
    LoginComponent,
    SearchLessonsComponent,
    LessonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatMomentDateModule,
    MatDatepickerModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [LoadingService, MessagesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
