import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../posts.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  id: number;
  post;

  constructor(private route: ActivatedRoute, private postsService: PostsService, private location: Location,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = Number(params.id);
    });
    this.getPost(this.id);
  }

  getPost(id: number){
    this.postsService.getPost(id)
      .subscribe(post => {
        this.post = post;
        console.log(this.post);
      });
  }

  onEditPost(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onBack(){
    this.location.back();
    console.log('back button clicked');
  }
}
