import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInterface } from 'src/app/core/interfaces/product.interface';
import { ProductService } from 'src/app/core/services/product.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BasketService } from 'src/app/core/services/basket/basket.service';

@Component({
  selector: 'app-mouse-details',
  templateUrl: './mouse-details.component.html',
  styleUrls: ['./mouse-details.component.css']
})
export class MouseDetailsComponent implements OnInit {
  mouseId: number;
  mouse: ProductInterface;

  private unsubscribe = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private basketService: BasketService
  ) { }

  ngOnInit(): void {
    this.getMouseId();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  setToBasket(): void {
    const mouseItemProduct = {
      name: "mouse",
      count: 1
    }
    this.basketService.setToBasket(mouseItemProduct);
  }

  private getMouseId(): void {
    this.activatedRoute.params
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      params => {
        this.getMouse(params.mouseId);
      }
    )
  }

  private getMouse(mouseId: number): void {
    this.productService.getMouse(mouseId)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      (data) =>{
        this.mouse = data;
      })
  }
}
