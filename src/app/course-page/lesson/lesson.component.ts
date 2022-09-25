import { Component, Input, OnInit } from '@angular/core';
import { Lesson } from 'src/app/models/lesson';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css'],
})
export class LessonComponent implements OnInit {
  @Input()
  lesson: Lesson | null = null;

  constructor() {}

  ngOnInit(): void {}
}
