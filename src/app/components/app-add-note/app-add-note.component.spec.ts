import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAddNoteComponent } from './app-add-note.component';

describe('AppAddNoteComponent', () => {
  let component: AppAddNoteComponent;
  let fixture: ComponentFixture<AppAddNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppAddNoteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppAddNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
