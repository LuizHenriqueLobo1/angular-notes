import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  private date: string = new Date().toLocaleDateString("en-us")

  constructor() { }

  getDate(): string {
    return this.date
  }

}
