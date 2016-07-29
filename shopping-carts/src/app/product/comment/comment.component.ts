import { Component, Input, OnInit } from '@angular/core';

import { CommentDetailComponent } from './comment-detail';
import { AddCommentComponent } from './add-comment';
import { Comment, CommentService } from './shared';

@Component({
  selector: 'comment',
  template: require('./comment.component.jade'),
  directives: [
    CommentDetailComponent,
    AddCommentComponent
  ],
  providers: [
    CommentService
  ]
})

export class CommentComponent implements OnInit{
  @Input() postId: string;
  comments: Comment[] = [];

  constructor(
    private commentService: CommentService) {}

  ngOnInit() {
    this.commentService.getComments(this.postId)
      .subscribe(comments => {
        this.comments = comments;
      });
  }

  trackByComment(index: number, comment: Comment) {
    return comment.id;
  }
}
