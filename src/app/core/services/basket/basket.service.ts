import { Injectable, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserInterface } from 'src/app/core/interfaces/user/user.interface';
import { ProductInterface } from '../../interfaces';


@Injectable({
  providedIn: 'root'
})

export class BasketService {
  url = 'http://localhost:3000';

  basket = new BehaviorSubject([]);
  basketCount = new BehaviorSubject(0);
  product = [];
  basketService: any;
  userId: number;
  count = 0;

  constructor(private http: HttpClient) {
      this.setToLocalStorage();
  }

  setToBasket(product): void {
    this.setToLocalStorage(product);
    // console.log(product);
    // this.count++;
    // console.log(this.count);
  }

  removeFromLocalstorage(id) {
    var basket = JSON.parse(localStorage.getItem("basket"));
    var index = basket.findIndex(x => x.id == id);

    basket.splice(index, 1);
    localStorage.setItem("basket", JSON.stringify(basket));
    // if (this.count <=0) {
    //   this.count = 0;
    // } else {
    //   this.count--
    // }
    // console.log(this.count);
  }

  private setToLocalStorage(product?): void {
    if (!localStorage.getItem("basket")) {
      localStorage.setItem("basket", JSON.stringify([]));
    } else {
      this.basket.next(JSON.parse(localStorage.getItem("basket")));
      this.basketCount.next(JSON.parse(localStorage.getItem("basket")).length);
    }
    if (!product) {
      return
    }

    const basket = JSON.parse(localStorage.getItem("basket"));
    basket.push(product);
    localStorage.setItem("basket", JSON.stringify(basket));
    this.basket.next(basket);
    this.basketCount.next(basket.length);
  }

  getOrder(): Observable<Array<UserInterface>> {
    return this.http.get<Array<UserInterface>>(`${this.url}/orders`);
  }

  // getProductOrder(): Observable<Array<any>> {
  //   return this.http.get<Array<any>>(`${this.url}/orders`);
  // }

  updateOrder(user: UserInterface) {
    return this.http.put<Array<UserInterface>>(`${this.url}/orders`, user);
  }

  // updateProductsOrder(product: ProductInterface) {
  //   return this.http.put<Array<ProductInterface>>(`${this.url}/orders`, product);
  // }

  addOrder(user: UserInterface) {
    return this.http.post<Array<UserInterface>>(`${this.url}/orders`, user);
  }

  // addProductsOrder(product: ProductInterface) {
  //   return this.http.post<Array<ProductInterface>>(`${this.url}/orders`, product);
  // }

}
