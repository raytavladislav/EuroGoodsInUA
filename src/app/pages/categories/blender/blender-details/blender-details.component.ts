import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInterface } from 'src/app/core/interfaces/product.interface';
import { ProductService } from 'src/app/core/services/product.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BasketService } from 'src/app/core/services/basket/basket.service';

@Component({
  selector: 'app-blender-details',
  templateUrl: './blender-details.component.html',
  styleUrls: ['./blender-details.component.css']
})
export class BlenderDetailsComponent implements OnInit, OnDestroy {
  grillId: number;
  blender: ProductInterface;

  private unsubscribe = new Subject();
 
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private basketService: BasketService
  ) { }

  ngOnInit(): void {
    this.getBlenderId();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  setToBasket(): void {
    const blenderItemProduct = {
      name: "blender",
      count: 1
    }
    this.basketService.setToBasket(blenderItemProduct);
  }

  private getBlenderId(): void {
    this.activatedRoute.params
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      params => {
        this.getBlender(params.productId);
      }
    )
  }

  private getBlender(productId: number): void {
    this.productService.getBlender(1)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      (data) =>{
        this.blender = data;
      })
  }
}
