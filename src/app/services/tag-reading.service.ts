import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TagReadingService {

  constructor() { }

  getTagValue(tagName: string): any{
    var doc = document.getElementsByName(tagName);
    var tag = doc[0] as HTMLInputElement;
    return tag.value;
  }
}
