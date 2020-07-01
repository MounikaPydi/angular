import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpCacheService {

  private cache = [];

  constructor() { }

  put(reqUrl: string, res: HttpResponse<any>) {
    this.cache[reqUrl] = res;
  }

  get(reqUrl) {
    return this.cache[reqUrl];
  }
}
