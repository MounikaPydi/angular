import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { Post } from './post.model';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts = [];

  constructor(private http: HttpClient) {}

  // getPosts(){
  //   this.http.get('https://crud-operations-c91e8.firebaseio.com/')
  // }

  addPost(post){
    this.http.post('https://crud-operations-c91e8.firebaseio.com/posts.json', post)
      .subscribe(response => {
        return response;
      },
      error => {
        return error;
      });
  }

  getPosts(): Observable<any>{
    return this.http.get('https://crud-operations-c91e8.firebaseio.com/posts.json')
    .pipe(
      map(response => {
        this.posts = [];
        for (const key in response) {
          if (response.hasOwnProperty(key)) {
            this.posts.push({...response[key], id: key});
          }
        }
        return this.posts;
      }),
      // catchError(this.handleError('fetchPosts', []))
      catchError(errorRes => {
        return throwError(errorRes);
      })
    );
  }

  deletePosts(){
    return this.http.delete('https://crud-operations-c91e8.firebaseio.com/posts.json');
  }
  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {

  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead

  //     // TODO: better job of transforming error for user consumption
  //     console.log(`${operation} failed: ${error.message}`);

  //     // Let the app keep running by returning an empty result.
  //     console.log(result);
  //     return of(result as T);
  //   };
  // }
}
