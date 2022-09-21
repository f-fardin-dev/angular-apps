import * as moment from 'moment';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoadingService } from 'src/app/loading/loading.service';
import { MessagesService } from 'src/app/messages/messages.service';
import { Course } from 'src/app/models/course';
import { CoursesStore } from 'src/app/services/course.store';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.css'],
  providers: [LoadingService, MessagesService],
})
export class CourseDialogComponent implements OnInit {
  form: FormGroup;
  course: Course;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) course: Course,
    private coursesStore: CoursesStore,
    private loadingService: LoadingService
  ) {
    this.course = course;
    this.form = fb.group({
      description: [course.description, Validators.required],
      category: [course.category, Validators.required],
      releasedAt: [moment(), Validators.required],
      longDescription: [course.longDescription, Validators.required],
    });
  }

  ngOnInit(): void {}

  save() {
    const changes = this.form.value;
    const saveCourse$ = this.coursesStore.saveCourse(this.course.id, changes);
    this.loadingService
      .showLoaderUntilCompleted(saveCourse$)
      .subscribe((val) => {
        this.dialogRef.close(val);
      });
  }

  close() {
    this.dialogRef.close();
  }
}
