import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = 'http://localhost:3000';


  constructor(
    private http: HttpClient
  ) { }

  getGrills(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(`${this.url}/grills`);
  }
  
  getBlenders(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(`${this.url}/blenders`);
  }

  getHeadphones(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(`${this.url}/headphones`);
  }

  getKeyboards(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(`${this.url}/keyboards`);
  }

  getLoudSpeakers(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(`${this.url}/loudSpeakers`);
  }

  getMixers(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(`${this.url}/mixers`);
  }

  getMouses(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(`${this.url}/mouses`);
  }

  getPrinters(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(`${this.url}/printers`);
  }

  getToasters(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(`${this.url}/toasters`);
  }

}
