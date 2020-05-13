import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInterface } from 'src/app/core/interfaces/product.interface';
import { ProductService } from 'src/app/core/services/product.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BasketService } from 'src/app/core/services/basket/basket.service';

@Component({
  selector: 'app-keyboard-details',
  templateUrl: './keyboard-details.component.html',
  styleUrls: ['./keyboard-details.component.css']
})
export class KeyboardDetailsComponent implements OnInit {
  keyboardId: number;
  keyboard: ProductInterface;

  private unsubscribe = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private basketService: BasketService
  ) { }

  ngOnInit(): void {
    this.getKeyboardId();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  setToBasket(): void {
    const keyboardItemProduct = {
      picture: this.keyboard.picture,
      name: this.keyboard.title,
      price: this.keyboard.price,
      id: this.keyboard.id,
      count: 1
    }
    this.basketService.setToBasket(keyboardItemProduct);
  }

  private getKeyboardId(): void {
    this.activatedRoute.params
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      params => {
        this.getKeyboard(params.keyboardId);
      }
    )
  }

  private getKeyboard(keyboardId: number): void {
    this.productService.getKeyboard(keyboardId)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      (data) =>{
        this.keyboard = data;
      })
  }

}
