import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInterface } from 'src/app/core/interfaces/product.interface';
import { ProductService } from 'src/app/core/services/product.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BasketService } from 'src/app/core/services/basket/basket.service';

@Component({
  selector: 'app-headphone-details',
  templateUrl: './headphone-details.component.html',
  styleUrls: ['./headphone-details.component.css']
})
export class HeadphoneDetailsComponent implements OnInit {
  headphoneId: number;
  headphone: ProductInterface;

  private unsubscribe = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private basketService: BasketService
  ) { }

  ngOnInit(): void {
    this.getHeadphoneId();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  setToBasket(): void {
    const headphoneItemProduct = {
      picture: this.headphone.picture,
      name: this.headphone.title,
      price: this.headphone.price,
      id: this.headphone.id,
      count: 1
    }
    this.basketService.setToBasket(headphoneItemProduct);
    alert('Товар додано!');
  }

  private getHeadphoneId(): void {
    this.activatedRoute.params
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      params => {
        this.getHeadphone(params.headphoneId);
      }
    )
  }

  private getHeadphone(headphoneId: number): void {
    this.productService.getHeadphone(headphoneId)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      (data) =>{
        this.headphone = data;
      })
  }

}
