import { Component, Input } from '@angular/core';

import { Comment } from '../shared';

@Component({
  selector: 'comment-detail',
  template: require('./comment-detail.component.jade')
})

export class CommentDetailComponent {
  @Input() comment: Comment;
}
