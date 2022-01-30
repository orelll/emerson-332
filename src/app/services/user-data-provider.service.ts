import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataProviderService {

private login = "EmersonID";
private password = "12";

  constructor() { }

  getUserLoginAndPassword():[string, string]{
    return [this.login, this.password];
  }
}
