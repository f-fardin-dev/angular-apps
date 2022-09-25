import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course';
import { CoursesStore } from '../services/course.store';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursePageComponent implements OnInit {
  beginnerCourses$: Observable<Course[]> = new Observable<Course[]>();
  advancedCourses$: Observable<Course[]> = new Observable<Course[]>();

  constructor(private coursesStore: CoursesStore) {}

  ngOnInit(): void {
    this.reloadCourses();
  }

  reloadCourses() {
    this.beginnerCourses$ = this.coursesStore.filterByCategory('BEGINNER');
    this.advancedCourses$ = this.coursesStore.filterByCategory('ADVANCED');
  }
}
