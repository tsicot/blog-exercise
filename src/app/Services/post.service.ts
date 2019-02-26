import { Injectable } from '@angular/core';
import {Post} from "../Model/Post.model";
import {Subject} from "rxjs";
import {Router} from "@angular/router";
import {post} from "selenium-webdriver/http";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: Post[] = [new Post("Post 1", "Content of post 1"),
    new Post("Post 2", "Content of post 2"),
    new Post("Post 3", "Content of post 3"),
    new Post("Post 4", "Content of post 4")];
  postSubject = new Subject<Post[]>();

  constructor() { }

  emitPosts() {
    this.postSubject.next(this.posts);
  }

  createPost(newPost: Post) {
    this.posts.push(newPost);
    this.emitPosts();
  }

  deletePost(postToDelete: Post) {
    const postIndex = this.posts.findIndex(
      (currentPost) => {
        return currentPost === postToDelete;
      }
    );
    this.posts.splice(postIndex, 1);
    this.emitPosts();
  }

  updatePost(postToUpdate: Post) {
    const postIndex = this.posts.findIndex(
      (currentPost) => {
        return currentPost === postToUpdate;
      }
    );
    this.posts[postIndex] = postToUpdate;
    this.emitPosts();
  }
}
