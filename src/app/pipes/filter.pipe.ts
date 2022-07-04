import { Pipe, PipeTransform } from '@angular/core';

import { Note } from '../../app/components/notes/notes.model';

@Pipe({
    name: 'filter',
    pure: false
})
export class FilterPipe implements PipeTransform {
  transform(items: Note[], filter: string): any {
    if (!items || !filter) return items
    filter = filter.toLowerCase()
    return items.filter(item => item.title.toLowerCase().indexOf(filter) !== -1 || item.description.toLowerCase().indexOf(filter) !== -1)
  }
}
