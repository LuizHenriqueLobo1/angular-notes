import { Component, OnInit } from '@angular/core';

import { Note } from '../notes.model';
import { NoteService } from 'src/app/services/note.service';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.css']
})
export class UpdateNoteComponent implements OnInit {

  note: Note = {
    date: '',
    title: '',
    description: ''
  }

  constructor(
    private noteService: NoteService,
    private dialogService: DialogService
  ) {}

  ngOnInit() {
    const id = parseInt(this.dialogService.getId());
    this.note = this.noteService.getOne(id);
  }

  updateNote() {
    this.noteService.update(this.note);
  }
}
