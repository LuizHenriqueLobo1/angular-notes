import { Injectable } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { UpdateNoteComponent } from '../components/notes/update-note/update-note.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  private id: any

  openDialog(): void {
    const dialogRef = this.dialog.open(UpdateNoteComponent, {
      width: '350px'
    })

    dialogRef.afterClosed().subscribe();
  }

  setId(id: any): void {
    this.id = id
  }

  getId(): string {
    return this.id.toString()
  }

}
