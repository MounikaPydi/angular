import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit, OnDestroy {
  @ViewChild('f') addPostForm: NgForm;
  successMessage: string;
  errorMessage: string;
  subscription: Subscription;
  timer: Observable<any>;
  constructor(private postsService: PostsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  onPostAdd() {
    const post = {title: this.addPostForm.value.title,
                  body: this.addPostForm.value.body,
                  userId: this.addPostForm.value.userId
                 };
    this.postsService.addPost(post).subscribe((response) => {
      if (response.status === 201) {
        this.successMessage = 'your post is successfully submitted';
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

  ngOnDestroy(){
    // this.subscription.unsubscribe();
  }
}
