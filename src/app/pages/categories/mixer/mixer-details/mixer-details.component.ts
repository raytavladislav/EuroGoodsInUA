import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInterface } from 'src/app/core/interfaces/product.interface';
import { ProductService } from 'src/app/core/services/product.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getMixerId();
  }

  private getMixerId(): void {
    this.activatedRoute.params
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      params => {
        this.getMixer(params.productId);
      }
    )
  }

  private getMixer(productId: number): void {
    this.productService.getMixer(productId)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      (data) =>{
        this.mixer = data;
      })
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
