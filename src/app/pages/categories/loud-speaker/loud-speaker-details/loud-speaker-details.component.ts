import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInterface } from 'src/app/core/interfaces/product.interface';
import { ProductService } from 'src/app/core/services/product.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BasketService } from 'src/app/core/services/basket/basket.service';

@Component({
  selector: 'app-loud-speaker-details',
  templateUrl: './loud-speaker-details.component.html',
  styleUrls: ['./loud-speaker-details.component.css']
})
export class LoudSpeakerDetailsComponent implements OnInit {
  loudSpeakerId: number;
  loudSpeaker: ProductInterface;

  private unsubscribe = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private basketService: BasketService
  ) { }

  ngOnInit(): void {
    this.getLoudSpeakerId();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
  
  setToBasket(): void {
    const loudSpeakerItemProduct = {
      name: "loudSpeaker",
      count: 1
    }
    this.basketService.setToBasket(loudSpeakerItemProduct);
  }

  private getLoudSpeakerId(): void {
    this.activatedRoute.params
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      params => {
        this.getLoudSpeaker(params.productId);
      }
    )
  }

  private getLoudSpeaker(productId: number): void {
    this.productService.getLoudSpeaker(1)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      (data) =>{
        this.loudSpeaker = data;
      })
  }
}
