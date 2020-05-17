import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import { User } from '../../interfaces/user';
import { UserInterface } from 'src/app/core/interfaces/user/user.interface';


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

  constructor(private http: HttpClient) {
      this.setToLocalStorage();
  }

  setToBasket(product): void {
    this.setToLocalStorage(product);
    console.log(product);
  }

  removeFromLocalstorage(id) {
    var basket = JSON.parse(localStorage.getItem("basket"));
    var index = basket.findIndex(x => x.id == id);

    basket.splice(index, 1);
    localStorage.setItem("basket", JSON.stringify(basket));
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

  getOrders(): Observable<Array<UserInterface>> {
    return this.http.get<Array<UserInterface>>(`${this.url}/orders`);
  }

  updateOrders(user: UserInterface) {
    return this.http.put<Array<UserInterface>>(`${this.url}/orders`, user);
  }

  addOrder(user: UserInterface) {
    return this.http.post<Array<UserInterface>>(`${this.url}/orders`, user);
  }
}
