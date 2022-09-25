import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Lesson } from 'src/app/models/lesson';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-search-lessons',
  templateUrl: './search-lessons.component.html',
  styleUrls: ['./search-lessons.component.css'],
})
export class SearchLessonsComponent implements OnInit {
  searchResults$?: Observable<Lesson[]>;
  activeLesson: Lesson | null = null;
  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {}

  onSearch(value: string) {
    this.searchResults$ = this.coursesService.searchLessons(value);
  }

  openLesson(lesson: Lesson) {
    this.activeLesson = lesson;
  }

  onBackToSearch() {
    this.activeLesson = null;
  }
}
