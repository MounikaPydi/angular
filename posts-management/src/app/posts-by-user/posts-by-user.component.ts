import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts-by-user',
  templateUrl: './posts-by-user.component.html',
  styleUrls: ['./posts-by-user.component.css']
})
export class PostsByUserComponent implements OnInit {
  posts;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
  }

  onSubmit(userId: HTMLInputElement) {
    this.postsService.getPostsByUserId(userId.value).subscribe((response) => {
      this.posts = response;
      console.log(response);
    });
  }

}
