import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TagReadingService {

  constructor() { }

  getTagValue(componentName: string, tagName: string): any{
    var container = document.querySelector(`#${componentName}`);
    var found = container.querySelector(`[name=${tagName}]`) as HTMLInputElement;
    return found?.value ?? '';
  }
}
