import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES, FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { Comment, CommentService } from '../shared';

@Component({
  selector: 'add-comment',
  template: require('./add-comment.component.jade'),
  directives: [
    FORM_DIRECTIVES,
    REACTIVE_FORM_DIRECTIVES
  ]
})

export class AddCommentComponent implements OnInit {
  @Input() postId: string;
  @Output() newComment = new EventEmitter();
  newCommentForm: FormGroup;
  isAdding: boolean = false;

  constructor(
    private commentService: CommentService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.newCommentForm = this.formBuilder.group({
      'user': [''],
      'comment': ['']
    });
  }

  resetFormData() {
    (<FormControl>this.newCommentForm.controls['user']).updateValue('');
    (<FormControl>this.newCommentForm.controls['comment']).updateValue('');
  }

  onSubmit(comment: Comment) {
    if (this.isAdding) {
      return;
    }

    this.isAdding = true;
    comment.productId = this.postId;

    this.commentService.save(comment)
      .subscribe(newComment => {
        this.isAdding = false;
        this.newComment.emit(newComment);

        this.resetFormData();
      },
      errs => {
        console.log(errs);
      });
  }
}
