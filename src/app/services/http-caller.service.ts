import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HttpCallerService {

  constructor(private http: HttpClient) {
  }

  loadPage(pageAddress: string):Observable<string>{

    return this.http.get('assets/tcp_ip.shtml', { responseType: 'text', observe:'response' }, ).pipe(
      map(data => {
        return data.body;
      })
    );
  }
}
