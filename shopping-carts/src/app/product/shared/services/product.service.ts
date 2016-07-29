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
    this.productUrl = this.config.apiEndpoint + '/products';
  }

  private extractData(res: Response) {
    return res.json();
  }

  getProducts(params: any): Observable<Product[]> {
    let searchParams = new URLSearchParams();
    if (params.type) {
      searchParams.set('type', params.type);
    }

    if (!isNaN(params.start) && !isNaN(params.end)) {
      searchParams.set('_start', params.start);
      searchParams.set('_end', params.end);
    }

    return this.http.get(this.productUrl, { search: searchParams })
      .map(this.extractData);
  }

  getProduct(name: string): Observable<Product> {
    let searchParams = new URLSearchParams();
    searchParams.set('name', name);

    return this.http.get(this.productUrl, { search: searchParams })
      .map(this.extractData);
  }
}
