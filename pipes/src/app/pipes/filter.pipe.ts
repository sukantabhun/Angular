import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false, //true to remove performance issues
})
export class FilterPipe implements PipeTransform {
  transform(value: any, inputVal: string) {
    if (value.length === 0 || inputVal === '') {
      return value;
    }

    const users = [];
    for (const user of value) {
      if (user['name'].toLowerCase().includes(inputVal.toLowerCase())) {
        users.push(user);
      }
    }

    return users;
  }
}
