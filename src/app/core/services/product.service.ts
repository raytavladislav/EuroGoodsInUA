import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ProductInterface } from '../interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = 'http://localhost:3000';


  constructor(
    private http: HttpClient
  ) { }

  getGrills(): Observable<Array<ProductInterface>> {
    return this.http.get<Array<ProductInterface>>(`${this.url}/grills`);
  }

  getGrill(productId: number): Observable<any> {
    return this.http.get<any>(`${this.url}/grills/${productId}`);
  }
  
  getBlenders(): Observable<Array<ProductInterface>> {
    return this.http.get<Array<ProductInterface>>(`${this.url}/blenders`);
  }

  getBlender(productId: number): Observable<any> {
    return this.http.get<any>(`${this.url}/blenders/${productId}`);
  }

  getHeadphones(): Observable<Array<ProductInterface>> {
    return this.http.get<Array<ProductInterface>>(`${this.url}/headphones`);
  }

  getHeadphone(productId: number): Observable<any> {
    return this.http.get<any>(`${this.url}/headphones/${productId}`);
  }

  getKeyboards(): Observable<Array<ProductInterface>> {
    return this.http.get<Array<ProductInterface>>(`${this.url}/keyboards`);
  }

  getKeyboard(productId: number): Observable<any> {
    return this.http.get<any>(`${this.url}/keyboards/${productId}`);
  }

  getLoudSpeakers(): Observable<Array<ProductInterface>> {
    return this.http.get<Array<ProductInterface>>(`${this.url}/loudSpeakers`);
  }

  getLoudSpeaker(productId: number): Observable<any> {
    return this.http.get<any>(`${this.url}/loudSpeakers/${productId}`);
  }

  getMixers(): Observable<Array<ProductInterface>> {
    return this.http.get<Array<ProductInterface>>(`${this.url}/mixers`);
  }

  getMixer(productId: number): Observable<any> {
    return this.http.get<any>(`${this.url}/mixers/${productId}`);
  }

  getMouses(): Observable<Array<ProductInterface>> {
    return this.http.get<Array<ProductInterface>>(`${this.url}/mouses`);
  }

  getMouse(productId: number): Observable<any> {
    return this.http.get<any>(`${this.url}/mouses/${productId}`);
  }

  getPrinters(): Observable<Array<ProductInterface>> {
    return this.http.get<Array<ProductInterface>>(`${this.url}/printers`);
  }

  getPrinter(productId: number): Observable<any> {
    return this.http.get<any>(`${this.url}/printers/${productId}`);
  }

  getToasters(): Observable<Array<ProductInterface>> {
    return this.http.get<Array<ProductInterface>>(`${this.url}/toasters`);
  }

  getToaster(productId: number): Observable<any> {
    return this.http.get<any>(`${this.url}/toasters/${productId}`);
  }

}
