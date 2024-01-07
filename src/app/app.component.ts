import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppNoteListComponent } from './components/app-note-list/app-note-list.component';
import { AppAddNoteComponent } from './components/app-add-note/app-add-note.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    AppNoteListComponent,
    AppAddNoteComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'myNotes';
}
