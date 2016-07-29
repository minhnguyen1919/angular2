import { Injectable, Inject } from '@angular/core';
import { Http, URLSearchParams, RequestOptions, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Comment } from '../models';
import { APP_CONFIG, AppConfig } from '../../../../app.config';

let headers = new Headers({
  'Content-Type': 'application/json'
});

let options = new RequestOptions({ headers: headers });

@Injectable()
export class CommentService {
  private commentUrl: string;

  constructor(
    @Inject(APP_CONFIG) private config: AppConfig,
    private http: Http) {

    this.commentUrl = this.config.apiEndpoint + '/comments';
  }

  private extractData(res: Response) {
    return res.json();
  }

  getComments(postId: string): Observable<Comment[]> {
    let queryParams = new URLSearchParams();
    queryParams.set('productId', postId);

    return this.http.get(this.commentUrl, { search: queryParams })
      .map(this.extractData);
  }

  private post(comment: Comment) {
    return this.http
            .post(this.commentUrl, JSON.stringify(comment), options)
            .map(this.extractData);
  }

  save(comment: Comment) {
    if (comment.id) {
      return;
    }

    return this.post(comment);
  }
}
