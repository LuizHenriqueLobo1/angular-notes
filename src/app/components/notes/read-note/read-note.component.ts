import { Component, OnInit } from '@angular/core';

import { Note } from '../notes.model';
import { NoteService } from 'src/app/services/note.service';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-read-note',
  templateUrl: './read-note.component.html',
  styleUrls: ['./read-note.component.css']
})
export class ReadNoteComponent implements OnInit {

  notes: Note[] = [];
  search: string = '';
  selectedSort: string = 'default';

  constructor(
    private noteService: NoteService,
    private dialogService: DialogService
  ) {}

  ngOnInit() {
    this.loadNotes();
    this.noteService.updateNotesEvent.subscribe(() => this.loadNotes());
  }

  loadNotes() {
    this.notes = this.noteService.get();
  }

  readSingleNote(id: number) {
    this.dialogService.openDialog();
    this.dialogService.setId(id);
  }

  deleteNote(id: number) {
    this.noteService.delete(id);
  }

  sortNotes() {
    switch(this.selectedSort) {
      case 'default': {
        this.loadNotes();
        break;
      }
      case 'sort': {
        this.notes.sort((a, b) => a.title.localeCompare(b.title));
        break;
      }
      case 'revert': {
        this.notes.sort((a, b) => b.title.localeCompare(a.title));
        break;
      }
      default: {
        this.notes.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());
        break;
      }
    }
  }

  clearField() {
    this.search = ''
  }
}
