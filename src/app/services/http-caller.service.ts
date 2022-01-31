import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HttpCallerService {

  constructor(private http: HttpClient,
    private _snackBar: MatSnackBar) {
  }

  loadPage(pageAddress: string, page: string): Observable<string> {
    const fullAddress = `assets/${page}`;
    return this.http.get(fullAddress, { responseType: 'text', observe: 'response' },).pipe(
      map(data => {
        return data.body;
      })
    );
  }

  postChange(pageAddress: string, page: string, changes: [string, any][]): void {
    const fullAddress = `${pageAddress}/${page}`;

    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    let body = new URLSearchParams();
    changes.forEach(element => {
      body.set(element[0], element[1])
    });
    console.log(`posting body: ${body}`);
    this.http.post(fullAddress, body.toString(), options).subscribe(
      response => {
        console.log(response);
        this._snackBar.open('zapisano!', 'ok');
      },
      err => {
        console.error(err);
        this._snackBar.open(err.message, 'zamknij');
      }
    );
  }
}
