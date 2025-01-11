import { NgFor, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { PostService } from '../../service/post.service';
import { PostServiceImpl } from '../../service/post.service.impl';
import { Post } from '../../model/post';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../service/local.storage.service';

@Component({
  selector: 'app-posts',
  imports: [NgFor,
    NgIf
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {

  public posts : Post[] = [];
  private postService : PostService = inject(PostServiceImpl);
  private router : Router = inject(Router);
  private localStorageService : LocalStorageService = inject(LocalStorageService);

  ngOnInit(): void {
    this.postService.all()
    .forEach(posts => {
      this.posts = posts;
    });
  }

  logout(){
    this.localStorageService.deleteMany("token", "userId");
  }

}
