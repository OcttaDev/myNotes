import { Routes } from '@angular/router';
import { AppNoteListComponent } from './components/app-note-list/app-note-list.component';
import { AppAddNoteComponent } from './components/app-add-note/app-add-note.component';

export const routes: Routes = [
  { path: '', component: AppNoteListComponent },
  { path: 'new', component: AppAddNoteComponent },
];
