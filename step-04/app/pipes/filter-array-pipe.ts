import {Pipe, PipeTransform} from '@angular/core';

// # Filter Array of Objects
@Pipe({name: 'filter'})
export class FilterArrayPipe implements PipeTransform {
    transform(items, args) {
        if (!args || !args[0]) {
            return items;
        } else if (items) {
            return items.filter(item => item.name.match(new RegExp(args, 'i')));
        }
    }
}