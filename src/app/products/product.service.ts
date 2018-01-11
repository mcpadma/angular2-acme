import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { IProduct } from "./products";

@Injectable()
export class ProductService {
    private _productUrl = "https://api.myjson.com/bins/18n0op";

  
  constructor(private _http:HttpClient) { }


}
