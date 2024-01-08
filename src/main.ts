import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { AppNoteListComponent } from './app/components/app-note-list/app-note-list.component';
import { AppAddNoteComponent } from './app/components/app-add-note/app-add-note.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
