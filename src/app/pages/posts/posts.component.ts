import { NgFor, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { PostService } from '../../service/post.service';
import { PostServiceImpl } from '../../service/post.service.impl';
import { Post } from '../../model/post';

@Component({
  selector: 'app-posts',
  imports: [NgFor,
    NgIf
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {

  private posts : Post[] = [];
  private postService : PostService = inject(PostServiceImpl);

  ngOnInit(): void {
    this.postService.all()
    .forEach(posts => {
      this.posts = posts;
    });
  }

}
