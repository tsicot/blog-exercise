import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Post} from "../Model/Post.model";
import {PostService} from "../Services/post.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})


export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  postSubscription = new Subscription();

  constructor(private postsService: PostService) { }

  ngOnInit() {
    this.postSubscription = this.postsService.postSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postsService.emitPosts();
  }

  ngOnDestroy(): void {
    this.postSubscription.unsubscribe();
  }
}
