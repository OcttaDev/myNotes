import { Component, inject } from '@angular/core';
import { NOTES, Note } from '../../../notes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-note-list',
  standalone: true,
  imports: [],
  templateUrl: './app-note-list.component.html',
  styleUrl: './app-note-list.component.css',
})
export class AppNoteListComponent {
  notes: Note[] = NOTES;
  router = inject(Router);

  show(title: string) {
    alert(title);
  }
  navegate() {
    this.router.navigateByUrl('/new');
  }
}
