import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEventType,
  HttpResponse
  } from '@angular/common/http';

import { tap } from 'rxjs/operators';
import { HttpCacheService } from './http-cache.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class CacheInterceptorService implements HttpInterceptor {

  constructor(private httpCacheService: HttpCacheService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('in intercept of cache interceptor');
    if (req.url === 'https://jsonplaceholder.typicode.com/posts') {
      console.log('in if of cache interceptor');
      const cachedResponse = this.httpCacheService.get(req.urlWithParams);
      if (cachedResponse) {
        console.log('from cache', cachedResponse);
        return of(cachedResponse);
      }
      return next.handle(req).pipe(tap(event => {
        if (event.type === HttpEventType.Response) {
          console.log('calling if in cache interceptor response');
          this.httpCacheService.put(req.urlWithParams, event);
        }
      }));
    }
    return next.handle(req);
  }
}
