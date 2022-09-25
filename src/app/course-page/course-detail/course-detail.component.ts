import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';
import { startWith, tap, map } from 'rxjs/operators';
import { combineLatest, Observable } from 'rxjs';
import { Course } from 'src/app/models/course';
import { Lesson } from 'src/app/models/lesson';

interface CourseData {
  course: Course;
  lessons: Lesson[];
}

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseDetailComponent implements OnInit {
  data$: Observable<CourseData> | undefined;

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    const courseId = parseInt(
      this.route.snapshot.paramMap.get('courseId') || ''
    );

    const course$ = this.coursesService
      .loadCourseById(courseId)
      .pipe(startWith(null));

    const lessons$ = this.coursesService
      .loadAllCourseLessons(courseId)
      .pipe(startWith([]));

    this.data$ = combineLatest([course$, lessons$]).pipe(
      map(([course, lessons]) => {
        return {
          course,
          lessons,
        };
      }),
      tap(console.log)
    );
  }
}
