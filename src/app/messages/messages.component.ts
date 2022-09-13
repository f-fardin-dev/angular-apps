import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MessagesService } from './messages.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  showMessages = false;
  errors$: Observable<string[]> | undefined;

  constructor(public messagesService: MessagesService) {
    console.log('Created messages component');
  }

  ngOnInit() {
    this.errors$ = this.messagesService.errors$.pipe(
      tap(() => (this.showMessages = true))
    );
  }

  onClose() {
    this.showMessages = false;
  }
}
