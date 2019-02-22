import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  posts=[new Post("Post 1", "Content of post 1"),
  new Post("Post 2", "Content of post 2"),
  new Post("Post 3", "Content of post 3"),
  new Post("Post 4", "Content of post 4")];

  getPosts(){
    return this.posts;
  }
}
