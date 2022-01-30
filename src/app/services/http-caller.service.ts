import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HttpCallerService {

  constructor(private http: HttpClient) {
  }

  loadPage(pageAddress: string, page: string):Observable<string>{
    const fullAddress = `assets/${page}`;
    return this.http.get(fullAddress, { responseType: 'text', observe:'response' }, ).pipe(
      map(data => {
        return data.body;
      })
    );
  }
}
