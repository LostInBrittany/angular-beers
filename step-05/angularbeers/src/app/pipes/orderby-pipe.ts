
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: "orderby"})
export class OrderByPipe implements PipeTransform {
    transform(array: Array<string>, args: string): Array<string> {
        array.sort((a: any, b: any) => {
            if (a[args] < b[args]) {
                return -1;
            } else if (a[args] > b[args]) {
                return 1;
            } else {
                return 0;
            }
        });
        return array;
    }
}