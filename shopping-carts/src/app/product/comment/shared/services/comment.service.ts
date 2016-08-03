import { Injectable, Inject } from '@angular/core';
import { Headers, Http, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Comment } from '../models';
import { APP_CONSTANT } from '../../../../app.constant';
import { APP_CONFIG, AppConfig } from '../../../../app.config';

const headers = new Headers({
  'Content-Type': 'application/json'
});

const options = new RequestOptions({ headers: headers });

@Injectable()
export class CommentService {
  private commentUrl: string;

  constructor(
    @Inject(APP_CONFIG) private config: AppConfig,
    private http: Http) {

    this.commentUrl = this.config.apiEndpoint + APP_CONSTANT.api.comments.route;
  }

  private extractData(res: Response) {
    return res.json();
  }

  private post(comment: Comment) {
    return this.http
            .post(this.commentUrl, JSON.stringify(comment), options)
            .map(this.extractData);
  }

  getComments(postId: string): Observable<Comment[]> {
    let queryParams = new URLSearchParams();
    queryParams.set(APP_CONSTANT.api.comments.params.productId, postId);

    return this.http.get(this.commentUrl, { search: queryParams })
      .map(this.extractData);
  }

  save(comment: Comment) {
    if (comment.id) {
      return;
    }

    return this.post(comment);
  }
}
