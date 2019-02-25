import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../Model/Post.model';
import {PostService} from '../../Services/post.service';


@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() post: Post;

  constructor(private postsService: PostService) {
  }

  ngOnInit() {
  }

  onLike() {
    this.post.loveIts++;
    this.postsService.updatePost(this.post);
  }

  onDislike() {
    this.post.loveIts--;
    this.postsService.updatePost(this.post);
  }

  onDelete() {
    this.postsService.deletePost(this.post);
  }
}
