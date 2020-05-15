import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BasketService {
  basket = new BehaviorSubject([]);
  basketCount = new BehaviorSubject(0);
  product = [];
  basketService: any;

  constructor() {
    this.setToLocalStorage();
  }

  setToBasket(product): void {
    this.setToLocalStorage(product);
    console.log(product);
  }

  removeFromLocalstorage(id) {
    var basket = JSON.parse(localStorage.getItem("basket"));
    var index = basket.findIndex(x => x.id == id);

    basket.splice(index, 1); // удаляем с локалсторедж
    localStorage.setItem("basket", JSON.stringify(basket));
  }

  // clearBasket(): void {
  //   localStorage.clear()
  //   this.product = []
  // }

  // deleteBasketItem(productId: number) {
  //   this.basketService.removeFromLocalstorage(productId);

  //   var index = this.product.findIndex(x => x.id == productId);
  //   this.product.splice(index, 1); // видаляю з локалсторедж
  //   // this.basket = this.basket.filter((item,index) => index === productId);
  // }

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
    this.basketCount.next(basket.length)
  }

}
