import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInterface } from 'src/app/core/interfaces/product.interface';
import { ProductService } from 'src/app/core/services/product.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getLoudSpeakerId();
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
    this.productService.getLoudSpeaker(productId)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      (data) =>{
        this.loudSpeaker = data;
      })
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
