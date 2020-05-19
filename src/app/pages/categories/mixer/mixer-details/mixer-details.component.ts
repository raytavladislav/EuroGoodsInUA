import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInterface } from 'src/app/core/interfaces/product.interface';
import { ProductService } from 'src/app/core/services/product.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BasketService } from 'src/app/core/services/basket/basket.service';

@Component({
  selector: 'app-mixer-details',
  templateUrl: './mixer-details.component.html',
  styleUrls: ['./mixer-details.component.css']
})
export class MixerDetailsComponent implements OnInit {
  mixerId: number;
  mixer: ProductInterface;

  private unsubscribe = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private basketService: BasketService
  ) { }

  ngOnInit(): void {
    this.getMixerId();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  setToBasket(): void {
    const mixerItemProduct = {
      picture: this.mixer.picture,
      name: this.mixer.title,
      price: this.mixer.price,
      id: this.mixer.id,
      count: 1
    }
    this.basketService.setToBasket(mixerItemProduct);
    alert('Товар додано!');
  }

  private getMixerId(): void {
    this.activatedRoute.params
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      params => {
        this.getMixer(params.mixerId);
      }
    )
  }

  private getMixer(mixerId: number): void {
    this.productService.getMixer(mixerId)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      (data) =>{
        this.mixer = data;
      })
  }
}
