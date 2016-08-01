import { Component, Input, OnInit, OnChanges } from '@angular/core';

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

export class CommentComponent implements OnInit, OnChanges {
  @Input() postId: string;
  comments: Comment[] = [];

  constructor(
    private commentService: CommentService) {}

  ngOnInit() {
    this.getComments();
  }

  ngOnChanges() {
    this.getComments();
  }

  getComments() {
    this.commentService.getComments(this.postId)
      .subscribe(comments => {
        this.comments = comments;
      });
  }

  newComment(comment: Comment) {
    this.comments.push(comment);
  }

  trackByComment(index: number, comment: Comment) {
    return comment.id;
  }
}
