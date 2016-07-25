import { Injectable, Inject } from '@angular/core';
import { Http, Headers, URLSearchParams, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Product } from '../models';
import { APP_CONFIG, AppConfig } from '../../../app.config';

let headers = new Headers({
  'Content-type': 'application/json'
});

@Injectable()

export class ProductService {
  private productUrl: string;

  constructor(
    private http: Http,
    @Inject(APP_CONFIG) private config: AppConfig) {
    this.productUrl = this.config.apiEndpoint + '/product';
  }

  private extractData(res: Response) {
    return res.json();
  }

  getProduct(): Observable<Product[]> {
    return this.http.get(this.productUrl)
      .map(this.extractData);
  }
}
