import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInterface } from 'src/app/core/interfaces/product.interface';
import { ProductService } from 'src/app/core/services/product.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BasketService } from 'src/app/core/services/basket/basket.service';

@Component({
  selector: 'app-grill-details',
  templateUrl: './grill-details.component.html',
  styleUrls: ['./grill-details.component.css']
})

export class GrillDetailsComponent implements OnInit, OnDestroy {
  grillId: number;
  grill: ProductInterface;

  private unsubscribe = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private basketService: BasketService
  ) { }

  ngOnInit(): void {
    this.getGrillId();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  setToBasket(): void {
    const grillItemProduct = {
      name: "grill",
      count: 1
    }
    this.basketService.setToBasket(grillItemProduct);
  }

  private getGrillId(): void {
    this.activatedRoute.params
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      params => {
        this.getGrill(params.grillId);
      }
    )
  } 

  private getGrill(grillId: number): void {
    this.productService.getGrill(grillId)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      (data) =>{
        this.grill = data;
      })
  }

}
