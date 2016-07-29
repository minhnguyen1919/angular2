import { Component } from '@angular/core';

import { CommentDetailComponent } from './comment-detail';
import { AddCommentComponent } from './add-comment';

@Component({
  selector: 'comment',
  template: require('./comment.component.jade'),
  directives: [
    CommentDetailComponent,
    AddCommentComponent
  ]
})

export class CommentComponent {

}
