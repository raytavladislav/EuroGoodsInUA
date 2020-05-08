import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInterface } from 'src/app/core/interfaces/product.interface';
import { ProductService } from 'src/app/core/services/product.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getMouseId();
  }

  private getMouseId(): void {
    this.activatedRoute.params
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      params => {
        this.getMouse(params.productId);
      }
    )
  }

  private getMouse(productId: number): void {
    this.productService.getMouse(productId)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      (data) =>{
        this.mouse = data;
      })
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
