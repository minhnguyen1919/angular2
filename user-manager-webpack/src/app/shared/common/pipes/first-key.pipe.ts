import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstKey'
})

export class FirstKeyPipe implements PipeTransform {
  transform(obj: Object) {
    if (obj) {
      var keys = Object.keys(obj);
      if (keys && keys.length>0) {
        return keys[0];
      }
    }

    return null;
  }
}
