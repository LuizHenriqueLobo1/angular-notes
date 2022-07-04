import { Component } from '@angular/core';

import { Note } from '../notes.model';
import { NoteService } from 'src/app/services/note.service';
import { DateService } from 'src/app/services/date.service';


@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent {

  note: Note = {
    date: this.date.getDate(),
    title: '',
    description: ''
  }

  constructor(
    private noteService: NoteService,
    private date: DateService
  ) {}

  createNote() {
    this.noteService.add(this.note);
    this.clearFields();
  }

  clearFields() {
    this.note.title = '';
    this.note.description = '';
  }
}
