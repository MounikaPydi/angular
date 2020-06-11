import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  id: number;
  @ViewChild('f') addPostForm: NgForm;
  successMessage: string;
  errorMessage: string;
  subscription: Subscription;
  timer: Observable<any>;
  constructor(private postsService: PostsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;
    });
  }

  onPostUpdate() {
    const post = {title: this.addPostForm.value.title,
                  body: this.addPostForm.value.body,
                  userId: this.addPostForm.value.userId,
                  id: this.id,
                 };
    this.postsService.updatePost(post, this.id).subscribe((response) => {
      if (response.status === 200) {
        console.log(response);
        this.successMessage = 'your post is successfully updated';
        this.timer = timer(5000);
        this.subscription = this.timer.subscribe((x) => {
          this.successMessage = '';
          this.addPostForm.reset();
        });
      }
    }, error => {
      this.errorMessage = error.message;
      this.timer = timer(5000);
      this.subscription = this.timer.subscribe((x) => {
        this.errorMessage = '';
        this.addPostForm.reset();
      });
    });
  }
}
