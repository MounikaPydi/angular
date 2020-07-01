import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getPost(id: number){
    console.log('in posts service');
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

  addPost(post){
    return this.http.post('https://jsonplaceholder.typicode.com/posts', post,
    {
      observe: 'response'
    });
  }

  updatePost(post, id){
    return this.http.put(`https://jsonplaceholder.typicode.com/posts/${id}`, post, {
      observe: 'response'
    });
  }

  getPostsByUserId(userId){
    let searchParams = new HttpParams();
    searchParams = searchParams.append('userId', userId);
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/`, {
      params: searchParams,
      observe: 'body'
    });
  }

}
