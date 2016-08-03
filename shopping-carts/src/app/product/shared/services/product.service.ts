import { Injectable, Inject } from '@angular/core';
import { Http, URLSearchParams, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Product } from '../models';
import { APP_CONSTANT } from '../../../app.constant';
import { APP_CONFIG, AppConfig } from '../../../app.config';

@Injectable()

export class ProductService {
  private productUrl: string;
  private productMadeInUrl: string;
  private productTypeUrl: string;

  constructor(
    private http: Http,
    @Inject(APP_CONFIG) private config: AppConfig) {
    this.productUrl = this.config.apiEndpoint + APP_CONSTANT.api.products.route;
    this.productMadeInUrl = this.config.apiEndpoint + '/made_in';
    this.productTypeUrl = this.config.apiEndpoint + '/types';
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

    searchParams = this.setParam(searchParams, APP_CONSTANT.api.products.params.type, params.type);
    searchParams = this.setParam(searchParams, APP_CONSTANT.api.products.params.start, params.start);
    searchParams = this.setParam(searchParams, APP_CONSTANT.api.products.params.sort, params.sort);
    searchParams = this.setParam(searchParams, APP_CONSTANT.api.products.params.order, params.order);
    searchParams = this.setParam(searchParams, APP_CONSTANT.api.products.params.limit, params.limit);

    return searchParams;
  }

  getProductType(): Observable<string[]> {
    return this.http.get(this.productTypeUrl)
      .map(this.extractData);
  }

  getProductMadeIn(): Observable<string[]> {
    return this.http.get(this.productMadeInUrl)
      .map(this.extractData);
  }

  getProducts(params: any): Observable<Product[]> {
    return this.http.get(this.productUrl, { search: this.setParams(params) })
      .map(this.extractData);
  }

  getProduct(name: string): Observable<Product> {
    let searchParams = new URLSearchParams();
    searchParams.set(APP_CONSTANT.api.products.params.name, name);

    return this.http.get(this.productUrl, { search: searchParams })
      .map(this.extractData);
  }
}
