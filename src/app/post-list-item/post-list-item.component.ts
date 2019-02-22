import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post';


@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() post: Post;
  onLike(){
    this.post.loveIts +=1;
  }

  onDislike(){
    this.post.loveIts -= 1;
  }
  constructor() { }

  ngOnInit() {
  }

}
