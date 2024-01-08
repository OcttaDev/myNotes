import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NOTES, Note } from '../../../notes';

import { Router } from '@angular/router';

@Component({
  selector: 'app-app-add-note',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './app-add-note.component.html',
  styleUrl: './app-add-note.component.css',
})
export class AppAddNoteComponent {
  addNoteForm = new FormGroup({
    title: new FormControl('', Validators.required),
    text: new FormControl(''),
  });

  router = inject(Router);

  addNote() {
    let title = this.addNoteForm.value.title ?? '';
    let text = this.addNoteForm.value.text ?? '';

    if (this.addNoteForm.valid) {
      let ids = NOTES.map((a) => a.id);
      let maxId = 0;

      if (ids.length > 0) {
        maxId = Math.max(...ids);
      }
      let newNote: Note = {
        id: (maxId = 1),
        title: title,
        text: text,
      };
      NOTES.unshift(newNote);
      this.addNoteForm.reset();
      this.router.navigateByUrl('/');
    }
  }
}
