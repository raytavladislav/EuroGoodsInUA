import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInterface } from 'src/app/core/interfaces/product.interface';
import { ProductService } from 'src/app/core/services/product.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BasketService } from 'src/app/core/services/basket/basket.service';


@Component({
  selector: 'app-toaster-details',
  templateUrl: './toaster-details.component.html',
  styleUrls: ['./toaster-details.component.css']
})
export class ToasterDetailsComponent implements OnInit {
  toasterId: number;
  toaster: ProductInterface;

  private unsubscribe = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private basketService: BasketService
  ) { }

  ngOnInit(): void {
    this.getToasterId();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  setToBasket(): void {
    const toasterItemProduct = {
      name: "toaster",
      count: 1
    }
    this.basketService.setToBasket(toasterItemProduct);
  }

  private getToasterId(): void {
    this.activatedRoute.params
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      params => {
        this.getToaster(params.productId);
      }
    )
  }

  private getToaster(productId: number): void {
    this.productService.getToaster(1)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      (data) =>{
        this.toaster = data;
      })
  }
}
