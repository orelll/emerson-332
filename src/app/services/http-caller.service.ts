import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of, pipe } from 'rxjs';
import { delay, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HttpCallerService {

  constructor(private http: HttpClient) {
  }

  loadPage(pageAddress: string, page: string): Observable<string> {
    const fullAddress = `assets/${page}`;
    return this.http.get(fullAddress, { responseType: 'text', observe: 'response' },).pipe(
      delay(this.getRandomDelay()),
      map(data => {
        return data.body;
      })
    );
  }

  postChange(pageAddress: string, page: string, changes: [string, any][]): Observable<void> {
    const fullAddress = `${pageAddress}/${page}`;

    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    let body = new URLSearchParams();
    changes.forEach(element => {
      body.set(element[0], element[1])
    });
    console.log(`posting body: ${body}`);

    return this.http.post(fullAddress, body.toString(), options).
      pipe(
        delay(this.getRandomDelay()),
        map(x => { return; }))

  }

  private getRandomDelay():number{
    const min = 400;
    const max = 1800;
    return Math.random() * (max - min) + min;
  }
}
