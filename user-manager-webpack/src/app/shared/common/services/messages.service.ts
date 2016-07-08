import { Injectable } from '@angular/core';

@Injectable()

export class MessagesService {
  required(name: string) {
    return `${name} is required.`;
  }

  invalid(name: string) {
    return `${name} is invalid.`;
  }
}
