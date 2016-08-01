import { Injectable, Inject } from '@angular/core';
import { Http, URLSearchParams, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Product } from '../models';
import { APP_CONFIG, AppConfig } from '../../../app.config';

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

  private setParam(searchParams: URLSearchParams , param: string, value: string): URLSearchParams {
    if (value) {
      searchParams.set(param, value);
    }

    return searchParams;
  }

  private setParams(params: any): URLSearchParams {
    let searchParams = new URLSearchParams();

    searchParams = this.setParam(searchParams, 'type', params.type);
    searchParams = this.setParam(searchParams, '_start', params.start);
    searchParams = this.setParam(searchParams, '_sort', params.sort);
    searchParams = this.setParam(searchParams, '_order', params.order);
    searchParams = this.setParam(searchParams, '_limit', params.limit);

    return searchParams;
  }

  getProducts(params: any): Observable<Product[]> {
    return this.http.get(this.productUrl, { search: this.setParams(params) })
      .map(this.extractData);
  }

  getProduct(name: string): Observable<Product> {
    let searchParams = new URLSearchParams();
    searchParams.set('name', name);

    return this.http.get(this.productUrl, { search: searchParams })
      .map(this.extractData);
  }
}
