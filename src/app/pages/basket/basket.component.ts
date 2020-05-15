import { Component, OnInit, OnDestroy } from '@angular/core';
import { BasketService } from 'src/app/core/services/basket/basket.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit, OnDestroy {

  basketList;
  product = [];
  basket;
  productIndex: number;
  id: number;

  private unsubscribe = new Subject();

  constructor(
    private basketService: BasketService
  ) { }

  ngOnInit(): void {
    this.getBasketList();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  clearBasket(): void {
    localStorage.clear()
    this.product = [] // очищаем this.product тоже
  }

  getBasketList(): void {
    this.basketService.basket.pipe(takeUntil(this.unsubscribe))
      .subscribe(
        data => {
          console.log(data);
          this.product = data;
      });
  }

  deleteBasketItem(productId: number) {
    this.basketService.removeFromLocalstorage(productId);

    var index = this.product.findIndex(x => x.id == productId);
    this.product.splice(index, 1); // удаляем с this.product тоже
  }

  // deleteBasketItem(): void {
  //   var basket = JSON.parse(localStorage.getItem("basket"));
    
  //   this.basket.splice("this.basket", JSON.stringify(this.id), 1);
  //   localStorage.setItem("basket", JSON.stringify(basket));
  //   console.log(this.id)
  // }

  // deleteBasketItem(productId) {
  //   var basket = JSON.parse(localStorage.getItem("basket"));
  //   //находжу, під яким індексом знаходиться id
  //   var index = basket.findIndex(x=> x == productId);
  //   // видаляю по знайденному індексу
  //   this.product.id
  //   basket.splice(index, 1);
  //   localStorage.setItem("basket", JSON.stringify(basket));
  // }
}
// basket = basket.filter((item,index) => index === productId);