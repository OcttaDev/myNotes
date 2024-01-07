import { Component } from '@angular/core';
import { NOTES, Note } from '../../../notes';

@Component({
  selector: 'app-app-note-list',
  standalone: true,
  imports: [],
  templateUrl: './app-note-list.component.html',
  styleUrl: './app-note-list.component.css',
})
export class AppNoteListComponent {
  notes: Note[] = NOTES;

  show(title: string) {
    alert(title);
  }
}
