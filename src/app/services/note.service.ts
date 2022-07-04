import { Injectable, EventEmitter } from '@angular/core';
import { Note } from '../components/notes/notes.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  public updateNotesEvent = new EventEmitter();

  private setStorageItems(notes: Note[]) {
    localStorage.setItem('notes', JSON.stringify(notes));
  }

  private getStorageItems() {
    return JSON.parse(localStorage.getItem('notes') as string) || [];
  }

  add(note: Note) {
    let notes = this.getStorageItems();
    notes.push(note);
    notes.forEach((note: Note, index: number) => note.id = index + 1);
    this.setStorageItems(notes);
    this.updateNotesEvent.emit();
  }

  get(): Note[] {
    return this.getStorageItems() as Note[];
  }

  getOne(id: number): Note {
    return this.getStorageItems().find((note: Note) => note.id == id);
  }

  update(note: Note) {
    let notes = this.getStorageItems();
    const noteIndex = this.getIndexByNote(notes, note);
    notes[noteIndex] = note;
    this.setStorageItems(notes);
    this.updateNotesEvent.emit();
  }

  delete(id: number) {
    let notes = this.getStorageItems();
    const noteIndex = this.getIndexById(notes, id);
    notes.splice(noteIndex, 1);
    this.setStorageItems(notes);
    this.updateNotesEvent.emit();
  }

  private getIndexById(notes: Note[], id: number): number {
    return notes.findIndex((note: Note) => note.id == id);
  }

  private getIndexByNote(notes: Note[], note: Note): number {
    return notes.findIndex((n: Note) => n.id == note.id);
  }
}
