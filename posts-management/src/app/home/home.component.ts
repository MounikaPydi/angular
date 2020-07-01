import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts;

  constructor(private postsService: PostsService) { }

  ngOnInit(){
    // setTimeout(this.getPosts.bind(this), 3000);
    this.getPosts();
  }

  getPosts(){
    this.postsService.getPosts()
      .subscribe((posts) => {
        console.log(posts);
        this.posts = posts;
      },
      error => {
        console.log(error);
      });
  }

}
