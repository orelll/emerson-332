import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDataProviderService } from '../services/user-data-provider.service';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {

  constructor(private userDataProvider:UserDataProviderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const readyRequest = this.appendAuthHeader(request);
    return next.handle(readyRequest);
  }

  private getUserToken():string{
      const userData = this.userDataProvider.getUserLoginAndPassword();
      return btoa(`${userData[0]}:${userData[1]}`);
  }

  private appendAuthHeader(request: HttpRequest<unknown>): HttpRequest<unknown> {
    return request.clone({
      headers: request.headers.set('Authorization', this.getUserToken())
    });
  }
}
