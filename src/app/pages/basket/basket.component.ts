import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { BasketService } from 'src/app/core/services/basket/basket.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserInterface } from 'src/app/core/interfaces/user/user.interface';
import { ProductInterface } from 'src/app/core/interfaces';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit, OnDestroy {
  @Input() user: UserInterface;
  @Output() newOrder = new EventEmitter<UserInterface>();
  @Output() update = new EventEmitter<UserInterface>();
  @Output() newProductsOrder = new EventEmitter<UserInterface>();
  @Output() updateProduct = new EventEmitter<ProductInterface>();

  basketList;
  product = [];
  basket;
  productIndex: number;
  id: number;
  userList: Array<UserInterface>;
  productList: Array<ProductInterface>;

  private unsubscribe = new Subject();

  constructor(
    private basketService: BasketService
  ) { }

  ngOnInit(): void {
    this.getBasketList();
    this.getOrder();
    // this.getProductOrder();
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

  getOrder(): void {
    this.basketService.getOrder()
      .subscribe(userData => {
        this.userList = userData
      }),
      error => console.log(error)
  };

  getProductOrder(): void {
    this.basketService.getProductOrder()
      .subscribe(products => {
        this.product = products;
      }),
      error => console.log(error)
  }

  updateOrder(user: UserInterface): void {
    this.basketService.updateOrder(user)
    .subscribe();
  }

  updateProductsOrder(product: ProductInterface): void {
    this.basketService.updateProductsOrder(product)
    .subscribe();
  }

  addOrder(user: UserInterface): void {
    this.basketService.addOrder(user)
      .subscribe(() => {
        this.getOrder();
        // this.getProductOrder()
      });
  }

  addProductsOrder(product: ProductInterface): void {
    this.basketService.addProductsOrder(product)
      .subscribe(() => {
        this.getProductOrder();
      });
  }

  get total(){
    return this.product.reduce((sum,x) =>
    ({count: 1,
      price:sum.price+x.count*x.price}),
      {quantity: 1, price: 0}).price;
  }

}
