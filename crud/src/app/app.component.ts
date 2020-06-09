import { Component, OnInit } from '@angular/core';
import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  posts: Post[];
  error;
  constructor(private postsService: PostsService) {

  }

  ngOnInit() {
    this.postsService.getPosts().subscribe(posts => {
        this.posts = posts;
      }, error => {
        console.log(error.error.error);
        this.error = error.error.error;
      });
  }

  onSubmit(title: HTMLInputElement, content: HTMLInputElement) {
    const post = {title: title.value, content: content.value};
    this.postsService.addPost(post);
  }

  onFetch(){
    console.log('on fetching');
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    }, error => {
      console.log(error);
    });
  }

  onClear(){
    this.postsService.deletePosts().subscribe(() => {
      this.posts = [];
    });
  }
}
