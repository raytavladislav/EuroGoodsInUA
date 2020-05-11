import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  basket = new BehaviorSubject([]);
  basketCount = new BehaviorSubject(0);
  
  constructor() {
    this.setToLocalStorage();
  }

  setToBasket(product): void {
    this.setToLocalStorage(product);
    // this.basket.next(product);
    console.log(product);
  }

  private setToLocalStorage(product?): void {
    if (!localStorage.getItem("basket")){
      localStorage.setItem("basket", JSON.stringify([]));
    } else {
      this.basket.next(JSON.parse(localStorage.getItem("basket")));
      this.basketCount.next(JSON.parse(localStorage.getItem("basket")).lenght);
    }
    if (!product){
      return
    }
    const basket = JSON.parse(localStorage.getItem("basket"));
    basket.push(product);
    localStorage.setItem("basket", JSON.stringify(basket));
    this.basket.next(basket);
    this.basketCount.next(basket.lenght);

  }
}
