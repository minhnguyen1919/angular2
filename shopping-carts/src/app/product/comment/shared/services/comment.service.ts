import { Injectable, Inject } from '@angular/core';
import { Http, URLSearchParams, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Comment } from '../models';
import { APP_CONFIG, AppConfig } from '../../../../app.config';


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
}
