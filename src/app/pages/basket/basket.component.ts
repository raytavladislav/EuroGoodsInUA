import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { BasketService } from 'src/app/core/services/basket/basket.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserInterface } from 'src/app/core/interfaces/user/user.interface';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit, OnDestroy {
  @Input() user: UserInterface;
  @Output() newOrder = new EventEmitter<UserInterface>();
  @Output() update = new EventEmitter<UserInterface>();

  basketList;
  product = [];
  basket;
  productIndex: number;
  id: number;
  userList: Array<UserInterface>;

  private unsubscribe = new Subject();

  constructor(
    private basketService: BasketService
  ) { }

  ngOnInit(): void {
    this.getBasketList();

    this.getOrders();

  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  clearBasket(): void {
    localStorage.clear()
    this.product = []
  }

  getBasketList(): void {
    this.basketService.basket.pipe(takeUntil(this.unsubscribe))
      .subscribe(
        data => {
          this.product = data;
      }),
      error => {
        console.log(error)
      };
  }

  deleteBasketItem(productId: number) {
    this.basketService.removeFromLocalstorage(productId);

    var index = this.product.findIndex(x => x.id == productId);
    this.product.splice(index, 1);
  }

  submit(user: UserInterface): void {}

  getOrders(): void {
    // this.basketService.takeUserOrder(user)
    // .subscribe(
    //   data => {
    //     console.log(data);
    //     this.userList = this.basketService.getUserOrder();
    // });

    // this.userList = this.basketService.getUserOrder();
    this.basketService.getOrders()
      .subscribe(data => {
        this.userList = data;
      }),
      error => console.log(error)
  };

  updateOrders(user: UserInterface): void {
    this.basketService.updateOrders(user)
    .subscribe(
    //   () => {
    //   this.getOrders();
    // }
    );
  }

  addOrder(user: UserInterface): void {
    this.basketService.addOrder(user)
      .subscribe(() => {
        this.getOrders();
      });
  }

  get total(){
    return this.product.reduce((sum,x) =>
    ({count: 1,
      price:sum.price+x.count*x.price}),
      {quantity: 1, price: 0}).price;
  }

}
