import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUser(id: string) {
    if (id === '1') {
      return {
        id: '1',
        name: 'sukanta',
      };
    } else {
      return {
        id: '1',
        name: 'Suk',
      };
    }
  }
}
